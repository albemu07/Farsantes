import Buffoon from './Scripts/Buffoon.js';
import Countess from './Scripts/Countess.js';
import Guardia from './Scripts/guardia.js';
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }


  preload() {
    this.load.spritesheet('IdleBuffoon','./Assets/Buffoon/Idle.png',{frameWidth:150,frameHeight:150});
    this.load.spritesheet('RunBuffoon','./Assets/Buffoon/Run.png',{frameWidth:150,frameHeight:150});
    this.load.spritesheet('IdleCountess','./Assets/Countess/Idle.png',{frameWidth:320,frameHeight:320});
    this.load.spritesheet('RunCountess','./Assets/Countess/Run.png',{frameWidth:320,frameHeight:320});

    this.load.image('guardiaL','./Assets/SpriteSheet/guardiaLeft.png');
    this.load.image('guardiaR','./Assets/SpriteSheet/guardiaRight.png');
    this.load.image('guardiaF','./Assets/SpriteSheet/guardiaFront.png');
    this.load.image('guardiaB','./Assets/SpriteSheet/guardiaBack.png');

    this.load.image('vista','./Assets/SpriteSheet/deteccion.png') ;
  
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


    var PlayerBuffoon=new Buffoon(this,200,200,'IdleBuffoon');
    var PlayerCountess=new Countess(this,400,400,'IdleCountess');
    var Guardia1V = new Guardia(this,100,100, 100,500, false,'guardiaL');
    var Guardia2H = new Guardia(this,200,100, 400,100, true,'guardiaR');
    this.physics.add.collider(PlayerBuffoon,Guardia1V,this.ArlGuardia,null,this);
    //this.physics.add.collider(PlayerBuffoon,Guardia2H,this.ArlGuardia,null,this);
  }

  preUpdate(time,delta){

    
  }

  ArlGuardia(object1,object2)
  {
    console.log("Encontrado a Arlequin");
    object1.respawn();
    
  }
}
