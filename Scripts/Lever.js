import Door from './door.js';
import Objeto from './objeto.js';
export default class Lever extends Objeto {
    constructor(scene, x, y, activated){
        super(scene, x, y, activated ? "LeverOpen" : "LeverClose", 200, 200, 0.3, false);
        this.door=new Door(scene, this.x+100, this.y, activated);
        this.on=activated;        
        this.cursorsLever = this.scene.input.keyboard.addKeys({
            action: Phaser.Input.Keyboard.KeyCodes.Z
        });
    }

    interaction(){
        if(Phaser.Input.Keyboard.JustDown(this.cursorsLever.action)){
            this.on=!this.on;
            if(this.on){
                this.anims.play("ActivateLever", true);
                this.door.abrir();
            }
            else{
                this.anims.play("DesactivateLever", true);
                this.door.cerrar();
            }
        }       
    }
}