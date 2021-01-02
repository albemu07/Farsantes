import Objeto from './objeto.js';
export default class Door extends Objeto {
    constructor(scene, x, y, turn, activated){
        super(scene, x, y, "DoorClosed", 32, 32, 1, true);
        this.body.enable=!activated;
        this.open=activated;      
        this.angle=turn   
    }  

    abrir(){        
        if(this.body.enable) this.anims.play("OpenDoor",true);
        this.body.enable=false;
    }

    cerrar(){       
        if(!this.body.enable) this.anims.play("CloseDoor",true);
        this.body.enable=true;
    }
}