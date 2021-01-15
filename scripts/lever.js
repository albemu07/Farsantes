import Objeto from './objeto.js';
export default class Lever extends Objeto {
    constructor(scene, x, y, door,activated, level){
        super(scene, x, y, activated ? "LeverOpen"+level : "LeverClose"+level, 32, 32, 1, false);
        this.door=door;
        this.acti=activated;        
        this.cursorsLever = this.scene.input.keyboard.addKeys({
            action: Phaser.Input.Keyboard.KeyCodes.Z
        });
        this.level=level;
    }

    interaction(){
        this.acti=!this.acti;
        if(this.acti){
            this.anims.play("ActivateLever"+this.level, true);
            this.door.abrir();
        }
        else{
            this.anims.play("DesactivateLever"+this.level, true);
            this.door.cerrar();
        }             
    }
}