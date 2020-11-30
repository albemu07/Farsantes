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

    this.load.spritesheet('IdleCharacter1','./Assets/SpriteSheet/Characters1.png',{frameWidth:59,frameHeight:65.5});
    this.load.image('vista','./Assets/SpriteSheet/deteccion.jpg')
  
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
      key:'IdleCharacter1',
      frames: this.anims.generateFrameNumbers('IdleCountess'),
      frameRate:4,
      repeat: -1
    });

    var PlayerBuffoon=new Buffoon(this,200,200,'IdleBuffoon');
    var PlayerCountess=new Countess(this,400,400,'IdleCountess');
    var EnemigoGuardia = new Guardia(this,100,100, 100,500, false,'IdleCharacter1');
  
    this.physics.add.collider(PlayerBuffoon,EnemigoGuardia,this.ArlGuardia,null,this);

  }

  preUpdate(time,delta){

    
  }

  ArlGuardia(object1,object2)
  {
    console.log("Encontrado a Arlequin");
    object1.respawn();
    
  }
}
