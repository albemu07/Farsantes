import Objeto from './objeto.js';
export default class PressurePlate extends Objeto {
    constructor(scene, x, y, door, activated){
        super(scene, x, y, activated ? "platePressed" : "plateUnpressed", 32, 32, 1, false);
        this.door=door
        this.active=activated;
    }

    platePressed(){
            if(this.active){
                this.setTexture('platePressed')
                this.door.abrir();
            }
            else{
                this.setTexture('plateUnpressed')
                this.door.cerrar();               
            }   
    }
}