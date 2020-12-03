export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y,sprite, scale, colliderX, colliderY) {
      super(scene, x, y, sprite);
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.speed=300;
      this.body.setSize(colliderX,colliderY,true)
      this.setScale(scale);
      this.body.setCollideWorldBounds();
    }

    preUpdate(time, delta, cursors, animIdle, animRun){
      super.preUpdate(time,delta);
      if (cursors.up.isDown) {
        this.body.setVelocityY(-this.speed);
      }
    else if (cursors.down.isDown) {
        this.body.setVelocityY(this.speed);
      }
    else{
          this.body.setVelocityY(0);
      }
    if (cursors.left.isDown) {
        this.body.setVelocityX(-this.speed);
        this.flipX=true;
        
      }
    else if (cursors.right.isDown) {
        this.body.setVelocityX(this.speed);
        this.flipX=false;
      }
    else{
        this.body.setVelocityX(0);
      }  
    if(this.body.velocity.x===0 && this.body.velocity.y===0){
        this.anims.play(animIdle,true);
    }
    else{
        this.anims.play(animRun,true);
    }
    }
  }