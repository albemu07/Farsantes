import Objeto from './objeto.js';
export default class PressurePlate extends Objeto {
    constructor(scene, x, y, door, activated, level){
        super(scene, x, y, activated ? "platePressed"+level : "plateUnpressed"+level, 32, 32, 1, false);
        this.door=door;
        this.active=activated;
        this.level=level;
    }

    platePressed(){
            if(this.active){
                this.setTexture('platePressed'+this.level);
                this.door.abrir();
            }
            else{
                this.setTexture('plateUnpressed'+this.level);
                this.door.cerrar();               
            }   
    }
}