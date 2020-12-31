import Buffoon from './scripts/buffoon.js';
import Countess from './scripts/countess.js';
import Lever from './scripts/lever.js';
import Ring from './scripts/ring.js';
import Caja from './scripts/caja.js';
import Door from './scripts/door.js';
import PressurePlate from './scripts/pressurePlate.js'
import Objecto from './scripts/objeto.js';
import Guardia from './scripts/guardia.js';
import Monje from './scripts/monje.js';


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

    const tileset = this.map.addTilesetImage('TileSetBien', 'map');

    this.ground = this.map.createStaticLayer('ground', tileset);
    this.mud = this.map.createStaticLayer('mud', tileset);
    this.walls = this.map.createStaticLayer('walls', tileset);

    // this.fences = this.map.createStaticLayer('vallas', tileset1);

   
    this.map.setCollisionBetween(46, 999);
    //otrascosas

    this.muudtemp = new Objecto(this, 624, 240, 'mud', 96, 32, 1, true);
    //Crea una caja
    this.score = 0;
    this.caja = new Caja(this, 400,32, 'BoxSprite');
    // this.caja = new Caja(this, 224, 432, 'BoxSprite');
    this.caja2=new Caja(this, 544, 480, 'BoxSprite');

    //this.ring = new Ring(this, 80, 80, 'ring');
    this.rings = this.physics.add.group();
    this.rings.add(new Ring (this,40, 40,'ringRC','ringR',150,0));
       
    //Grupo de puertas
    this.plateDoors= this.physics.add.staticGroup()
    this.plateDoors.add(new Door(this,176,464,false));
    this.plateDoors.add(new Door(this,176,656,false));
    this.plateDoors.add(new Door(this,784,272,false));
    this.plateDoors.add(new Door(this,496,464,false));
    this.plateDoors.add(new Door(this,176,336,false));


    //Grupo de placas
    this.pressurePlates=this.physics.add.group()
    this.pressurePlates.add(new PressurePlate(this,240,496,this.plateDoors.getChildren()[0],false));
    this.pressurePlates.add(new PressurePlate(this,240,624,this.plateDoors.getChildren()[1],false));
    this.pressurePlates.add(new PressurePlate(this,112,128,this.plateDoors.getChildren()[2],false));
    this.pressurePlates.add(new PressurePlate(this,720,656,this.plateDoors.getChildren()[3],false));
    this.pressurePlates.add(new PressurePlate(this,688,400,this.plateDoors.getChildren()[4],false));


    this.route1 =new Array (new Array(300,150),new Array(470,150),new Array(470,310),new Array(300,310));
    this.route2 =new Array (new Array(140,80),new Array(140,150),new Array(80,150),new Array(210,150));
    this.vigGuard = this.physics.add.group();
    this.vigGuard.add(new Guardia(this,true,this.route1,true,'guardiaF'));
    this.vigGuard.add(new Guardia(this,true,this.route2,false,'guardiaR'));
    this.vigNun = this.physics.add.group();


    //Crear zona (en este caso es un sprite, por claridad)
    this.endTrigger= this.physics.add.sprite(400,736,'Trigger');

    //Texto encima del trigger
    this.endTriggerText=this.add.text(650,150,'POR AQUÍ');

    this.door1=new Door(this,272,546,false);
    this.door2=new Door(this,304,400,false);
    this.door3=new Door(this,48,240,false);
    this.door4=new Door(this,752,528,false);
   
    this.lever1=new Lever(this, 80, 464, false, this.door1);
    this.lever2=new Lever(this, 80, 656, false, this.door2);
    this.lever3=new Lever(this, 688, 112, false, this.door3);
    this.lever4=new Lever(this, 16, 48, false, this.door4);

    this.playerBuffoon=new Buffoon(this,this.buffoonX,this.buffoonY,'IdleBuffoon');
    this.playerCountess=new Countess(this,this.countessX,this.countessY,'IdleCountess');
   
    for(var i=0; i<this.plateDoors.getChildren().length; i++){
      this.physics.add.collider(this.playerBuffoon, this.plateDoors.getChildren()[i]);
      this.physics.add.collider(this.playerCountess, this.plateDoors.getChildren()[i]);
    }   

    //Codigo provisional a falta de grupo de palancas
    this.physics.add.overlap(this.playerBuffoon, this.lever1, (o1, o2) => {
        o2.interaction();    });
    this.physics.add.overlap(this.playerCountess, this.lever1, (o1, o2) => {
        o2.interaction();    });
    this.physics.add.collider(this.playerBuffoon, this.door1);
    this.physics.add.collider(this.playerCountess, this.door1);
    
    this.physics.add.overlap(this.playerBuffoon, this.lever2, (o1, o2) => {
        o2.interaction();    });
    this.physics.add.overlap(this.playerCountess, this.lever2, (o1, o2) => {
        o2.interaction();    });
    this.physics.add.collider(this.playerBuffoon, this.door2);
    this.physics.add.collider(this.playerCountess, this.door2);
    
    this.physics.add.overlap(this.playerBuffoon, this.lever3, (o1, o2) => {
      o2.interaction();    });
    this.physics.add.overlap(this.playerCountess, this.lever3, (o1, o2) => {
        o2.interaction();    });
    this.physics.add.collider(this.playerBuffoon, this.door3);
    this.physics.add.collider(this.playerCountess, this.door3);
    
    this.physics.add.overlap(this.playerBuffoon, this.lever4, (o1, o2) => {
      o2.interaction();    });
    this.physics.add.overlap(this.playerCountess, this.lever4, (o1, o2) => {
      o2.interaction();    });
    this.physics.add.collider(this.playerBuffoon, this.door4);
    this.physics.add.collider(this.playerCountess, this.door4); 


    this.physics.add.overlap(this.playerBuffoon, this.rings, (o1, o2) => {this.takeRing(o1,o2); });
    this.physics.add.overlap(this.playerCountess, this.rings, (o1, o2) => {this.takeRing(o1,o2);     });

      this.physics.add.collider(this.playerBuffoon, this.caja.box);
      this.physics.add.collider(this.playerCountess, this.caja.box);
      this.physics.add.collider(this.playerBuffoon, this.caja2.box);
      this.physics.add.collider(this.playerCountess, this.caja2.box);
      
      this.physics.add.collider(this.playerBuffoon, this.walls);
      this.physics.add.collider(this.playerCountess, this.walls);
      this.physics.add.collider(this.walls, this.caja);
      this.physics.add.collider(this.walls, this.caja2);
      // this.physics.add.collider(this.playerCountess, this.mud);
      // this.physics.add.collider(this.playerBuffoon, this.mud);
      this.physics.add.collider(this.playerCountess, this.muudtemp);

      this.physics.add.overlap(this.playerCountess, this.caja.object, (o1, o2) => {
        this.moveBox(o1);     
       });
      this.physics.add.overlap(this.playerBuffoon, this.caja.object, (o2, o1) => {
        this.moveBox(o2);     
       });
      this.physics.add.overlap(this.playerCountess, this.caja2.object, (o1, o2) => {
        this.moveBox(o1);    
        });
      this.physics.add.overlap(this.playerBuffoon, this.caja2.object, (o2, o1) => {
        this.moveBox(o2);    
        }); 

        
    this.physics.add.overlap(this.playerBuffoon,this.vigGuard,(o1,o2)=>{this.arlVig(o1,o2);});
    this.physics.add.overlap(this.playerBuffoon,this.vigNun,(o1,o2)=>{this.arlVig(o1,o2);});
    this.physics.add.overlap(this.playerCountess,this.vigGuard,(o1,o2)=>{this.marGuardia(o1,o2);});
    this.physics.add.overlap(this.playerCountess,this.vigNun,(o1,o2)=>{this.marMonje(o1,o2)});
    

        
    //Tecla de menú de pausa
    this.input.keyboard.on('keydown_ESC', ()=> {this.scene.launch('pauseMenu',{zone: this.zone}); this.scene.sleep()},this);
  }

  preUpdate(time,delta){
  }

  update(time,delta){
    //Comprobación del overlapping entre trigger y jugadores
    this.physics.overlap(this.playerBuffoon, this.lever1);
    this.physics.overlap(this.playerBuffoon, this.lever2);
    this.physics.overlap(this.playerBuffoon, this.lever3);
    this.physics.overlap(this.playerBuffoon, this.lever4);  
    this.checkPressureplate();
    this.checkEndOverlap(); 
    if(!(this.physics.overlap(this.playerBuffoon, this.caja.object)) || (this.playerBuffoon.getVelocityX() === 0 && this.playerBuffoon.getVelocityY() === 0))
      this.playerBuffoon.speedChange(this.caja.stopMove());
  }

  takeRing(o1,o2)
  {
    if (this.physics.overlap(o1,o2.ring)){
      console.log("anillo cogido");
      this.score += o2.taken();
      o2.destroy();
    }
    else 
    {
      o2.animate();
    }
 
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
      if(player.speedChange(this.caja.moveAlong(player)));
      else player.speedChange(this.caja2.moveAlong(player));
    }
    else {
      if(player.speedChange(this.caja.stopMove()));
      else player.speedChange(this.caja2.stopMove());
    }
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
      if (this.physics.overlap(this.playerBuffoon, this.pressurePlates.getChildren()[i]) ||this.physics.overlap(this.playerCountess, this.pressurePlates.getChildren()[i]) || this.physics.overlap(this.caja, this.pressurePlates.getChildren()[i]) || this.physics.overlap(this.caja2, this.pressurePlates.getChildren()[i])){
        this.pressurePlates.getChildren()[i].active=true;
      }
      else{
        this.pressurePlates.getChildren()[i].active=false;
      }
      this.pressurePlates.getChildren()[i].platePressed();
    }
  }
}   
