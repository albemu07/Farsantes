import Game from '../game.js'
export default class Zone2 extends Game {
    constructor() {
      super('Zone2','Zone1',400,200,400,400,);
    }
    create(){
        super.create()
        this.add.text(20,20,"Esta es la zona 2, entra en el recuadro con ambos jugadores para pasar de zona")        
    }
}