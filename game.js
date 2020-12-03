import Buffoon from './Scripts/Buffoon.js';
import Countess from './Scripts/Countess.js';
import Player from './Scripts/Player.js'; //creo que no hace falta
import Lever from './Scripts/Lever.js';
import Box from './Scripts/Box.js';
export default class Game extends Phaser.Scene {
  constructor(Zone,NextZone,CountessPositionX,CountessPositionY,BuffoonPositionX,BuffoonPositionY) {
    super({ key: Zone });
    this.NextZone=NextZone;
    this.CountessX=CountessPositionX;
    this.CountessY=CountessPositionY;
    this.BuffoonX=BuffoonPositionX;
    this.BuffoonY=BuffoonPositionY;  
  }


  preload() {
    this.load.spritesheet('IdleBuffoon','./Assets/Buffoon/Idle.png',{frameWidth:150,frameHeight:150});
    this.load.spritesheet('RunBuffoon','./Assets/Buffoon/Run.png',{frameWidth:150,frameHeight:150});
    this.load.spritesheet('IdleCountess','./Assets/Countess/Idle.png',{frameWidth:320,frameHeight:320});
    this.load.spritesheet('RunCountess','./Assets/Countess/Run.png',{frameWidth:320,frameHeight:320});
    this.load.image('BoxSprite', './Assets/Box/Box.png');
    this.load.image('Trigger','./Assets/Mechanisms/NextZoneTrigger.png');
    this.load.spritesheet('Lever1','./Assets/Lever/Lever1.png',{frameWidth:352,frameHeight:208});
    this.load.spritesheet('Lever2','./Assets/Lever/Lever2.png',{frameWidth:352,frameHeight:208});
    this.load.image('LeverOpen','./Assets/Lever/Lever_Open.png');
    this.load.image('LeverClose','./Assets/Lever/Lever_Close.png');
    this.load.spritesheet('DoorOpen','./Assets/Door/Door_Open.png',{frameWidth:920,frameHeight:1127});
    this.load.spritesheet('DoorClose','./Assets/Door/Door_Close.png',{frameWidth:820,frameHeight:1035});
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
      key:'ActivateLever',
      frames: this.anims.generateFrameNumbers('Lever1'),
      frameRate:6,
      repeat: 0
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
    //Crear zona (en este caso es un sprite, por claridad)
    this.EndTrigger= this.physics.add.sprite(700,300,'Trigger')

    //Texto encima del trigger
    this.EndTriggerText=this.add.text(650,150,'POR AQUÍ')

    //Crear Jugadores
    this.PlayerBuffoon=new Buffoon(this,this.BuffoonX,this.BuffoonY,'IdleBuffoon');
    this.PlayerCountess=new Countess(this,this.CountessX,this.CountessY,'IdleCountess');
    this.lever=new Lever(this, 600, 200, false);

    this.physics.add.overlap(this.PlayerBuffoon, this.lever, (o1, o2) => {
      this.lever.interaction();
    });
    this.physics.add.collider(this.PlayerBuffoon, this.lever.door);  
    
    //Crea una caja
    this.Box = new Box(this, 300, 300, 'BoxSprite');

    this.physics.add.collider(this.PlayerBuffoon, this.Box , (o1, o2) => {
    o2.moveAlong(o1.getVelocityX(), o1.getVelocityY());
    });
    this.physics.add.collider(this.PlayerCountess, this.Box , (o1, o2) => {
    o2.moveAlong(o1.getVelocityX(), o1.getVelocityY());
    });
  }
  update(time,delta){
  //Comprobación del overlapping entre trigger y jugadores
  this.physics.overlap(this.PlayerBuffoon, this.lever);  
  this.checkEndOverlap();
  }

  checkEndOverlap(){
  //Si ambos jugadores entran en el trigger, se pasa de escena
    if(this.physics.overlap(this.PlayerBuffoon, this.EndTrigger) && this.physics.overlap(this.PlayerCountess, this.EndTrigger)){
      console.log('Siguiente escena')
      this.scene.start(this.NextZone)
    }
 //Si solo uno de ellos entra, "llama" al otro haciendo visible un texto
 else if(this.physics.overlap(this.PlayerBuffoon, this.EndTrigger) ^ this.physics.overlap(this.PlayerCountess, this.EndTrigger)){
   console.log('Un jugador colisionando')
   this.EndTriggerText.visible=true;
 }
 //Si no hay ninguno dentro, simplemente el texto se oculta
 else{
   this.EndTriggerText.visible=false;
 }
}
}    
