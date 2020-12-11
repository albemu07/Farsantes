import Buffoon from './Scripts/buffoon.js';
import Countess from './Scripts/countess.js';
import Guardia from './Scripts/guardia.js';
import Monje from './Scripts/monje.js';
import Player from './Scripts/player.js'; //creo que no hace falta
import Lever from './Scripts/lever.js';
import Ring from './Scripts/ring.js';
import Caja from './Scripts/caja.js';


export default class Game extends Phaser.Scene {
  constructor(zone,nextZone,countessPositionX,countessPositionY,buffoonPositionX,buffoonPositionY) {
    super({ key: zone });
    this.nextZone=nextZone;
    this.countessX=countessPositionX;
    this.countessY=countessPositionY;
    this.buffoonX=buffoonPositionX;
    this.buffoonY=buffoonPositionY;  
  }


  preload() {

  }

  create() {
   

    //Crea una caja
    this.score = 0;
    this.caja = new Caja(this, 300, 300, 'BoxSprite');
    this.ring = new Ring(this, 50, 50, 'ring');
    this.playerBuffoon=new Buffoon(this,this.buffoonX,this.buffoonY,'IdleBuffoon');
    this.playerCountess=new Countess(this,this.countessX,this.countessY,'IdleCountess');
    // this.vigilance = this.physics.add.group();
    // this.vigilance.add(new Guardia(this,150,100, 150,500, false,true,'guardiaL'));
    // this.vigilance.add(new Guardia(this,200,100, 400,100, true,true,'guardiaR'));
    // this.vigilance.add(new Monje(this,250,50, 250,500, false,false,'monjeL'));
    // this.vigilance.add(new Monje(this,100,200, 300,200, true,false,'monjeR'));


       //Crear zona (en este caso es un sprite, por claridad)
       this.endTrigger= this.physics.add.sprite(700,300,'Trigger')

       //Texto encima del trigger
       this.endTriggerText=this.add.text(650,150,'POR AQUÍ')
   
       //Crear Jugadores
       
       this.lever=new Lever(this, 600, 200, false);
   
       this.physics.add.overlap(this.playerBuffoon, this.lever, (o1, o2) => {
         this.lever.interaction();
       });
       this.physics.add.overlap(this.playerCountess, this.lever, (o1, o2) => {
        this.lever.interaction();
      });
      this.physics.add.collider(this.playerBuffoon, this.lever.door); 

      this.physics.add.overlap(this.playerBuffoon, this.ring, (o1, o2) => {
        this.score += o2.taken();
        this.ring.destroy();
      });
      this.physics.add.overlap(this.playerCountess, this.ring, (o1, o2) => {
        this.score += o2.taken();
        this.ring.destroy();
      });

      this.physics.add.collider(this.playerBuffoon, this.caja.box);
      this.physics.add.collider(this.playerCountess, this.caja.box);
      this.physics.add.overlap(this.playerCountess, this.caja.object, (o1, o2) => {
        this.moveBox(o1);
      });
      this.physics.add.overlap(this.playerBuffoon, this.caja.object, (o2, o1) => {
        this.moveBox(o2);
      });
      this.physics.add.overlap(this.playerBuffoon,this.vigilance,(o1,o2)=>{this.checkCollision(o1,o2);
      this.physics.add.overlap(this.playerCountess,this.vigilance,(o1,o2)=>{this.checkCollision(o1,o2);})
      })

  }

  preUpdate(time,delta){
  }

  update(time,delta){
    //Comprobación del overlapping entre trigger y jugadores
    this.physics.overlap(this.playerBuffoon, this.lever);  
    this.checkEndOverlap();
    
  }
  activeVision()
  {
    var enemigo = this.vigilance.getChildren();
    var num = enemigo.length;
    for (var i = 0; i < num; i++) {
      if (enemigo[i].tipo)
      enemigo[i].distraida =false;
    }
  }
  checkCollision(o1,o2){

    console.log("chequeo colisiones");
    if (o1===this.playerBuffoon)
    {
      if (this.physics.overlap(o1,o2.vision))
      {
        this.arlGuardia(o1,o2);
        this.activeVision();
      }

    }
    else if (o1 ===this.playerCountess && o2.tipo)
    {
      this.marGuardia(o1,o2);
    }
    else if (o1 ===this.playerCountess && !o2.tipo)
    {
      if (this.physics.overlap(o1,o2.vision))
      {
        this.marMonje(o1,o2);
        this.activeVision();
      }
      
    }
  }

  marGuardia(o1,o2)
  {
    if (o1.grabDown())
    {
      console.log("Distrayendo guardia");
      o2.distraida =true;
    }
    else {
      console.log("Dejo de distraer");
      o2.distraida =false;
    }
  }

  marMonje(o1,o2)
  {
    console.log("Encontrado a la Marquesa");
    this.playerCountess.respawn();
    this.playerBuffoon.respawn();
  }
  arlGuardia(o1,o2)
  {
    console.log("Encontrado a Arlequin");
    this.playerCountess.respawn();
    this.playerBuffoon.respawn();
    
  }

  moveBox(player){
    if (player.grabDown()){
      player.speedChange(this.caja.moveAlong(player));
    }
    else player.speedChange(this.caja.stopMove());
  }

  checkEndOverlap(){
  //Si ambos jugadores entran en el trigger, se pasa de escena
    if(this.physics.overlap(this.playerBuffoon, this.endTrigger) && this.physics.overlap(this.playerCountess, this.endTrigger)){
      console.log('Siguiente escena');
      this.scene.start(this.nextZone);
    }
 //Si solo uno de ellos entra, "llama" al otro haciendo visible un texto
    else if(this.physics.overlap(this.playerBuffoon, this.endTrigger) || this.physics.overlap(this.playerCountess, this.endTrigger)){
       console.log('Un jugador colisionando');
       this.endTriggerText.visible=true;
    }
 //Si no hay ninguno dentro, simplemente el texto se oculta
   else{
      this.endTriggerText.visible=false;
    }
  }
}   
