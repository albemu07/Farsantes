import Game from '../game.js'
export default class Zone1 extends Game {
    constructor() {
      super('Zone1','Zone2',200,200,200,400,);
    }
    create(){
        super.create()
        this.add.text(20,20,"Esta es la zona 1, entra en el recuadro con ambos personajes para pasar de zona")
    }
}