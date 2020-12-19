import Objeto from './objeto.js';
export default class PressurePlate extends Objeto {
    constructor(scene, x, y, door, activated){
        super(scene, x, y, activated, 64, 64, 0.5, false);
        this.door=door
        this.active=activated;
    }

    platePressed(){
            if(this.active){
               // this.anims.play("activePlate", true);
                this.door.abrir();
            }
            else{
               // this.anims.play("inactivePlate", true);
                this.door.cerrar();               
            }   
    }
}