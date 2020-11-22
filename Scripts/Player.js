export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y,sprite) {
      super(scene, x, y, sprite);
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.speed=300;
      this.cursors = this.scene.input.keyboard.createCursorKeys();
    }
    
    preUpdate(time,delta) {
        super.preUpdate(time,delta);
      if (this.cursors.up.isDown) {
        this.body.setVelocityY(-this.speed);
      }
      else if (this.cursors.down.isDown) {
        this.body.setVelocityY(this.speed);
      }
      else{
          this.body.setVelocityY(0);
      }
      if (this.cursors.left.isDown) {
        this.body.setVelocityX(-this.speed);
        this.flipX=true;
        
      }
      else if (this.cursors.right.isDown) {
        this.body.setVelocityX(this.speed);
        this.flipX=false;
      }
      else{
        this.body.setVelocityX(0);
    }

    if(this.body.velocity.x===0 && this.body.velocity.y===0){
        this.anims.play('IdleBuffoon',true);
    }
    else{
        this.anims.play('RunBuffoon',true);
    }
    }
  }