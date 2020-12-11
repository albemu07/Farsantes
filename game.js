import Buffoon from './Scripts/buffoon.js';
import Countess from './Scripts/countess.js';
import Guardia from './Scripts/guardia.js';
import Player from './Scripts/player.js'; //creo que no hace falta
import Lever from './Scripts/lever.js';
import Box from './Scripts/box.js';

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
    this.anims.create({
      key:'IdleBuffoonAnim',
      frames: this.anims.generateFrameNumbers('IdleBuffoon'),
      frameRate:4,
      repeat: -1
    });

    this.anims.create({
      key:'RunBuffoonAnim',
      frames: this.anims.generateFrameNumbers('RunBuffoon'),
      frameRate:6,
      repeat: -1
    });

    
    this.anims.create({
      key:'IdleCountessAnim',
      frames: this.anims.generateFrameNumbers('IdleCountess'),
      frameRate:3,
      repeat: -1
    });

    
    this.anims.create({
      key:'RunCountessAnim',
      frames: this.anims.generateFrameNumbers('RunCountess'),
      frameRate:6,
      repeat: -1
    });

    this.anims.create({
      key:'DesactivateLever',
      frames: this.anims.generateFrameNumbers('Lever2'),
      frameRate:6,
      repeat: 0
    });

    this.anims.create({
      key:'OpenDoor',
      frames: this.anims.generateFrameNumbers('DoorOpen'),
      frameRate:3,
      repeat: 0
    });

    this.anims.create({
      key:'CloseDoor',
      frames: this.anims.generateFrameNumbers('DoorClose'),
      frameRate:3,
      repeat: 0
    });

    this.anims.create({
      key:'ActivateLever',
      frames: this.anims.generateFrameNumbers('Lever1'),
      frameRate:6,
      repeat: 0
    });

    //Crea una caja
    this.box = new Box(this, 300, 300, 'BoxSprite');
    this.playerBuffoon=new Buffoon(this,this.buffoonX,this.buffoonY,'IdleBuffoon');
    this.playerCountess=new Countess(this,this.countessX,this.countessY,'IdleCountess');
    /*this.guardiasVision = this.physics.add.group();
    var guardia1V = new Guardia(this,100,100, 100,500, false,'guardiaL');
    var guardia2H = new Guardia(this,200,100, 400,100, true,'guardiaR');
    this.guardiasVision.add(guardia1V.vision);
    this.guardiasVision.add(guardia2H.vision);*/

    this.physics.add.overlap(this.playerBuffoon,this.guardiasVision,this.arlGuardia,null,this);

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

       this.physics.add.collider(this.playerBuffoon, this.box , (o1, o2) => {
      //  o2.moveAlong(o1.getVelocityX(), o1.getVelocityY());
       });
       this.physics.add.collider(this.playerCountess, this.box , (o1, o2) => {
      //  o2.moveAlong(o1.getVelocityX(), o1.getVelocityY());
       }); 
  }

  preUpdate(time,delta){
  }

  update(time,delta){
    //Comprobación del overlapping entre trigger y jugadores
    this.physics.overlap(this.playerBuffoon, this.lever);  
    this.checkEndOverlap();
    this.moveBox();
  }

  arlGuardia(object1,object2)
  {
    console.log("Encontrado a Arlequin");
    object1.respawn();
  }

  moveBox(){
    if (this.playerBuffoon.grabDown()){
      this.box.moveAlong(this.playerBuffoon.body.velocity, this.playerBuffoon.getCenterX(), this.playerBuffoon.getCenterY());
    }
    else if (this.playerCountess.grabDown()){
      this.box.moveAlong(this.playerCountess.body.velocity, this.playerCountess.getCenterX(), this.playerCountess.getCenterY());
    }
    else this.box.stopMove();
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
