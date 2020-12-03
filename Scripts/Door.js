export default class Door extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, activated){
        if(activated){
            super(scene, x, y, "DoorOpen");
        }
        else{
            super(scene, x, y, "DoorClose");
            this.scene.physics.add.existing(this);
            this.body.setSize(1000,1000,true);
        }
        this.open=activated;
        this.scene.add.existing(this);
        this.body.setImmovable(true);
        this.setScale(0.1);    
    }
    preUpdate(time, delta){
        super.preUpdate(time,delta);       
    }
    abrir(){
        this.body.enable=false;
        this.anims.play('OpenDoor',true);
    }

    cerrar(){
        this.body.enable=true;
        this.anims.play('CloseDoor',true);
    }
}