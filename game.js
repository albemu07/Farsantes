import Buffoon from './Scripts/Buffoon.js';
import Countess from './Scripts/Countess.js';
import Lever from './Scripts/Lever.js';

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }


  preload() {
    this.load.spritesheet('IdleBuffoon','./Assets/Buffoon/Idle.png',{frameWidth:150,frameHeight:150});
    this.load.spritesheet('RunBuffoon','./Assets/Buffoon/Run.png',{frameWidth:150,frameHeight:150});
    this.load.spritesheet('IdleCountess','./Assets/Countess/Idle.png',{frameWidth:320,frameHeight:320});
    this.load.spritesheet('RunCountess','./Assets/Countess/Run.png',{frameWidth:320,frameHeight:320});
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

    var PlayerBuffoon=new Buffoon(this,200,200,'IdleBuffoon');
    var PlayerCountess=new Countess(this,400,400,'IdleCountess');

    var lever=new Lever(this, 600, 200, false);

    this.physics.add.overlap(PlayerBuffoon, lever, (o1, o2) => {
      lever.interaction();
    });
    this.physics.add.collider(PlayerBuffoon, lever.door);   
  }

  preUpdate(time,delta){
    this.physics.overlap(this.PlayerBuffoon, this.lever);        
  }
}
