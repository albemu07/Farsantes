import Door from './Door.js';

export default class Lever extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, activated){
        if(activated){
            super(scene, x, y, "LeverOpen");
        }
        else{
            super(scene, x, y, "LeverClose");            
        }
        this.door=new Door(scene, this.x+100, this.y, activated);
        this.on=activated;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setSize(200,200,true);
        this.setScale(0.3);
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