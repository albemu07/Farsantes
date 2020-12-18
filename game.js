import Buffoon from './Scripts/buffoon.js';
import Countess from './Scripts/countess.js';
import Player from './Scripts/player.js'; //creo que no hace falta
import Lever from './Scripts/lever.js';
import Ring from './Scripts/ring.js';
import Caja from './Scripts/caja.js';
import Door from './Scripts/Door.js';
import PressurePlate from './Scripts/pressurePlate.js'


export default class Game extends Phaser.Scene {
  constructor(zone,nextZone,countessPositionX,countessPositionY,buffoonPositionX,buffoonPositionY, tileMap) {
    super({ key: zone });
    this.zone=zone;
    this.nextZone=nextZone;
    this.countessX=countessPositionX;
    this.countessY=countessPositionY;
    this.buffoonX=buffoonPositionX;
    this.buffoonY=buffoonPositionY;  
    this.tileMap = tileMap;
  }


  preload() {

  }

  create() {

    //mapa

    this.map = this.make.tilemap({ 
      key: this.tileMap 
    });

    const tileset1 = this.map.addTilesetImage('TileSet', 'map');
    const tileset2 = this.map.addTilesetImage('TileSetBien', 'map2');

    this.ground = this.map.createStaticLayer('Suelo', tileset1);
    this.mud = this.map.createStaticLayer('Barro', tileset2);
    this.fences = this.map.createStaticLayer('vallas', tileset1);
    this.mapObstacles = this.map.createStaticLayer('Cosas encima', tileset1);
   
    //otrascosas


    //Crea una caja
    this.score = 0;
    this.caja = new Caja(this, 300, 300, 'BoxSprite');
    this.ring = new Ring(this, 50, 50, 'ring');
    this.playerBuffoon=new Buffoon(this,this.buffoonX,this.buffoonY,'IdleBuffoon');
    this.playerCountess=new Countess(this,this.countessX,this.countessY,'IdleCountess');


       
    //Grupo de puertas
    this.plateDoors= this.physics.add.group()
    this.plateDoors.add(new Door(this,600,550,false));
    this.plateDoors.add(new Door(this,600,400,false));


    //Grupo de placas
    this.pressurePlates=this.physics.add.group()
    this.pressurePlates.add(new PressurePlate(this,400,550,this.plateDoors.getChildren()[0],false))
    this.pressurePlates.add(new PressurePlate(this,400,400,this.plateDoors.getChildren()[1],false))
    
    //Crear zona (en este caso es un sprite, por claridad)
    this.endTrigger= this.physics.add.sprite(700,300,'Trigger')

    //Texto encima del trigger
    this.endTriggerText=this.add.text(650,150,'POR AQUÍ')
   
    this.lever=new Lever(this, 500, 200, false);
   
    this.physics.add.overlap(this.playerBuffoon, this.lever, (o1, o2) => {
        this.lever.interaction();    });
    this.physics.add.overlap(this.playerCountess, this.lever, (o1, o2) => {
        this.lever.interaction();    });
    this.physics.add.collider(this.playerBuffoon, this.lever.door); 

    this.physics.add.overlap(this.playerBuffoon, this.ring, (o1, o2) => {
        this.score += o2.taken();
        this.ring.destroy();         });
    this.physics.add.overlap(this.playerCountess, this.ring, (o1, o2) => {
        this.score += o2.taken();
        this.ring.destroy();        });

      this.physics.add.collider(this.playerBuffoon, this.caja.box);
      this.physics.add.collider(this.playerCountess, this.caja.box);
      this.physics.add.overlap(this.playerCountess, this.caja.object, (o1, o2) => {
        this.moveBox(o1);      });
      this.physics.add.overlap(this.playerBuffoon, this.caja.object, (o2, o1) => {
        this.moveBox(o2);      });
      

        
    //Tecla de menú de pausa
    this.input.keyboard.on('keydown_ESC', ()=> {this.scene.launch('pauseMenu',{zone: this.zone}); this.scene.sleep()},this);
  }

  preUpdate(time,delta){
  }

  update(time,delta){
    //Comprobación del overlapping entre trigger y jugadores
    this.physics.overlap(this.playerBuffoon, this.lever);  
   this.checkPressureplate();
    this.checkEndOverlap();
    
  }
  marGuardia(o1,o2)
  {
    if (o1.stunDown())
    {
      console.log("Distrayendo guardia");
      o2.distraida =true;
      o2.setText();
    }
  }

  marMonje(o1,o2)
  {
    if (this.physics.overlap(o1,o2.vision))
    {
      console.log("Encontrado a la Marquesa");
      this.playerCountess.respawn();
      this.playerBuffoon.respawn();
    }
    
  }
  arlVig(o1,o2)
  {
    if (this.physics.overlap(o1,o2.vision)){
    console.log("Encontrado a Arlequin");
    this.playerCountess.respawn();
    this.playerBuffoon.respawn();
    }
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

  //Comprueba las colisiones entre jguadores y placa de presión. Si colisionan, cambia el "on" de la placa de presión a true; en el caso contrario, a false. Luego llama al método de interacción de la placa.
  checkPressureplate(){
    var num=this.pressurePlates.getChildren().length
    for(var i=0;i<num;i++){
      if (this.physics.overlap(this.playerBuffoon, this.pressurePlates.getChildren()[i]) ||this.physics.overlap(this.playerCountess, this.pressurePlates.getChildren()[i]) || this.physics.overlap(this.caja, this.pressurePlates.getChildren()[i]) ){
        this.pressurePlates.getChildren()[i].active=true;
      }
      else{
        this.pressurePlates.getChildren()[i].active=false;
      }
      this.pressurePlates.getChildren()[i].platePressed();
    }
  }
}   
