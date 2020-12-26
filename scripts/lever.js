import Door from './door.js';
import Objeto from './objeto.js';
export default class Lever extends Objeto {
    constructor(scene, x, y, activated, door){
        super(scene, x, y, activated ? "LeverOpen" : "LeverClose", 32, 32, 1, false);
        this.door=door;
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