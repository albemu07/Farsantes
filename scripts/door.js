import Objeto from './objeto.js';
export default class Door extends Objeto {
    constructor(scene, x, y, turn, activated, level){
        super(scene, x, y,  activated ? "DoorOpen"+level:"DoorClosed"+level, 12, 32, 1, true);
        this.body.enable=!activated;
        this.open=activated;      
        this.angle=turn; 
        this.level=level; 
    }  

    abrir(){        
        if(this.body.enable) this.anims.play("OpenDoor"+this.level,true);
        this.body.enable=false;
    }

    cerrar(){       
        if(!this.body.enable) this.anims.play("CloseDoor"+this.level,true);
        this.body.enable=true;
    }
}