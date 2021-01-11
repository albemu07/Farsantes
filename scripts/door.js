import Objeto from './objeto.js';
export default class Door extends Objeto {
    constructor(scene, x, y, turn, activated){
        super(scene, x, y,  activated ? "DoorOpen":"DoorClosed", 32, 32, 1, true);
        this.body.enable=!activated;
        this.open=activated;      
        this.angle=turn   
        this.closing = scene.sound.add('closeDoor');
        this.opening = scene.sound.add('openDoor');
    }  

    abrir(){        
        if(this.body.enable){
            this.anims.play("OpenDoor",true);
            this.opening.play();
        } 
        this.body.enable=false;
        
    }

    cerrar(){       
        if(!this.body.enable){
            this.anims.play("CloseDoor",true);
            this.closing.play();
        } 
        this.body.enable=true;
    }
}