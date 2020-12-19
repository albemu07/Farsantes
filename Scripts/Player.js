import Objeto from './objeto.js';
export default class Player extends Objeto {
    constructor(scene, x, y,sprite, scale, colliderX, colliderY, animIdle, animRun) {
      super(scene, x, y, sprite, colliderX, colliderY, scale, false);
      this.speedPlayer=100;     
      this.speedCaja=50;
      this.speed= this.speedPlayer
      this.animIdle = animIdle;
      this.animRun = animRun;
      this.colliderX = colliderX;
      this.colliderY = colliderY;
      this.scale = scale;
    }

    getVelocityY(){
      return this.body.velocity.y;
    }
    
    getVelocityX(){
      return this.body.velocity.x;
    }

    speedChange(caja){
      if (caja)
        this.speed = this.speedCaja;
      else this.speed = this.speedPlayer;
    }

    grabDown(){
      if (this.cursors.grab.isDown){
        return true;
      }
      else return false;
    }

    stunDown()
    {
      if (this.cursors.stun.isDown){
        return true;
      }
      else return false;
    }

    preUpdate(time, delta){
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
        this.anims.play(this.animIdle,true);
      }
      else{
        this.anims.play(this.animRun,true);
      }
    }
  }