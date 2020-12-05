export default class Countess extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y,sprite) {
      super(scene, x, y, sprite);
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.speed=300;
      this.cursorsCountess = this.scene.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D
      });
      this.body.setSize(320,320,true);
      this.setScale(0.3);
      this.body.setCollideWorldBounds();
    }
    
    preUpdate(time,delta) {
        super.preUpdate(time,delta);
      if (this.cursorsCountess.up.isDown) {
        this.body.setVelocityY(-this.speed);
      }
      else if (this.cursorsCountess.down.isDown) {
        this.body.setVelocityY(this.speed);
      }
      else{
          this.body.setVelocityY(0);
      }
      if (this.cursorsCountess.left.isDown) {
        this.body.setVelocityX(-this.speed);
        this.flipX=true;
        
      }
      else if (this.cursorsCountess.right.isDown) {
        this.body.setVelocityX(this.speed);
        this.flipX=false;
      }
      else{
        this.body.setVelocityX(0);
    }

    if(this.body.velocity.x===0 && this.body.velocity.y===0){
        this.anims.play('IdleCountessAnim',true);
    }
    else{
        this.anims.play('RunCountessAnim',true);
    }
    }
  }