import Objeto from './objeto.js';
export default class Ring extends Objeto {
    constructor(scene, x, y, sprite){
        super(scene, x, y, sprite, 300, 300, 0.1, false);
        this.value = 150;
    }

    taken(){
        //animación
        return this.value;
    }
}