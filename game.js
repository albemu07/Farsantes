import Player from './Scripts/Player.js';
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }


  preload() {
    this.load.spritesheet('IdleBuffoon','./Assets/Buffoon/Idle.png',{frameWidth:150,frameHeight:150});
    this.load.spritesheet('RunBuffoon','./Assets/Buffoon/Run.png',{frameWidth:150,frameHeight:150});
    this.load.image('StaticBuffoon','./Assets/Buffoon/Static.png');
  }

  create() {

    this.anims.create({
      key:'IdleBuffoon',
      frames: this.anims.generateFrameNumbers('IdleBuffoon'),
      frameRate:4,
      repeat: -1
    });

    this.anims.create({
      key:'RunBuffoon',
      frames: this.anims.generateFrameNumbers('RunBuffoon'),
      frameRate:6,
      repeat: -1
    });

    var Buffoon=new Player(this,200,200,'StaticBuffoon');
    Buffoon.setScale(2);
  }

  preUpdate(time,delta){

  }
}
