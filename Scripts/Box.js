import Objeto from './objeto.js'; 
export default class Box extends Objeto{
    constructor(scene, x, y,sprite){
        super(scene, x, y, sprite, 500, 500, 0.20, true);        
        this.radio = 1.5;
        this.cursors = this.scene.input.keyboard.addKeys({
            grab: Phaser.Input.Keyboard.KeyCodes.C,
            grabb: Phaser.Input.Keyboard.KeyCodes.M
        });
    }

    preUpdate(time, delta){
        super.preUpdate(time,delta);
        
    }

    moveBox(playerPos){
        
    }

    moveAlong(veloX, veloY){
        if (this.cursors.grab.isDown || this.cursors.grabb.isDown){
            this.body.setVelocityX(veloX);
            this.body.setVelocityY(veloY);
        }
        else{
            this.body.setVelocityY(0);
            this.body.setVelocityX(0);
            // console.log('caca');
        } 
    }
}