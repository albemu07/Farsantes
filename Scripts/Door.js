import Objeto from './objeto.js';
export default class Door extends Objeto {
    constructor(scene, x, y, activated){
        super(scene, x, y, activated ? "DoorOpen" : "DoorClose", 1000, 1000, 0.1, true);
        this.body.enable=!activated;
        this.open=activated;         
    }

    preUpdate(time, delta){
        
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