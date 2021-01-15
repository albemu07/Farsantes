import Objeto from './objeto.js';
export default class Player extends Objeto {
    constructor(scene, x, y,sprite, scale, colliderX, colliderY, animIdle, animRun, gamepad) {
      super(scene, x, y, sprite, colliderX, colliderY, scale, false);
      this.speedPlayer=100;     
      this.speedCaja=50;
      this.speed= this.speedPlayer
      this.animIdle = animIdle;
      this.animRun = animRun;
      this.colliderX = colliderX;
      this.colliderY = colliderY;
      this.scale = scale;
      this.pad = gamepad;
      this.leverGrabbed = false;
      this.sound = false;
      this.steps = scene.sound.add("footstep");
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

    stopSound(){
      this.steps.stop();
    }

    changeVolume(vol){
      this.steps.setVolume(vol);
    }
    
    grabLever(){
      if(!this.leverGrabbed &&((this.pad && this.pad.B) || this.cursors.grab.isDown)){
        this.leverGrabbed=true;
        return true
      }
      else if(this.leverGrabbed && (this.pad && !this.pad.B || !this.pad) && !this.cursors.grab.isDown){
        this.leverGrabbed=false
        return false;
      }
     }

    grabDown(){
      if (this.cursors.grab.isDown || (this.pad && this.pad.B)){
        return true;
      }
      else return false;
    }

    setGamePad(controller){
      this.pad = controller;
    }

    stunDown()
    {
      if (this.cursors.stun.isDown || (this.pad && this.pad.B)){
        return true;
      }
      else return false;
    }

    preUpdate(time, delta){
      super.preUpdate(time,delta);
      if(this.cursors.up.isDown || (this.pad && (this.pad.up || this.pad.leftStick.y < -0.2))){
        this.body.setVelocityY(-this.speed);
        this.angle=0
      }
      else if(this.cursors.down.isDown || (this.pad && (this.pad.down || this.pad.leftStick.y > 0.2))){
        this.body.setVelocityY(this.speed);
        this.angle=180
      }
      else{
        this.body.setVelocityY(0)
      }

      if(this.cursors.left.isDown || (this.pad && (this.pad.left || this.pad.leftStick.x < -0.2))){
        this.body.setVelocityX(-this.speed);
        this.angle=270
      }
      else if(this.cursors.right.isDown || (this.pad && (this.pad.right || this.pad.leftStick.x > 0.2))){
        this.body.setVelocityX(this.speed);
        this.angle=90
      }
      else{
        this.body.setVelocityX(0)
      }

      this.body.velocity.normalize().scale(this.speedPlayer)
 
      if(this.body.velocity.x===0 && this.body.velocity.y===0){
        this.anims.play(this.animIdle,true);
        if (this.sound){
          this.steps.stop();
          this.sound = false;
        }
      }
      else{
        this.anims.play(this.animRun,true);
        if(!this.sound){
          this.steps.play();
          this.steps.setLoop(true);
          this.sound = true;
        }   
      }
    }
  }