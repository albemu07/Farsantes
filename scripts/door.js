import Objeto from './objeto.js';
export default class Door extends Objeto {
    constructor(scene, x, y, turn, activated, level){
        super(scene, x, y,  activated ? "DoorClose"+level:"DoorOpen"+level, 12, 12, 1, true);
        this.body.enable=!activated;
        this.open=activated;      
        this.angle=turn   
        this.closing = scene.sound.add('closeDoor');
        this.opening = scene.sound.add('openDoor');
        this.level=level; 
    }  

    abrir(){        
        if(this.body.enable){
            this.anims.play("OpenDoor"+this.level,true);
            this.opening.play();
        } 
        this.body.enable=false;
        
    }

    cerrar(){       
        if(!this.body.enable){
            this.anims.play("CloseDoor"+this.level,true);
            this.closing.play();
        } 
        this.body.enable=true;
    }

    changeVolume(vol){
        this.closing.setVolume(vol);
        this.opening.setVolume(vol);
    }
}