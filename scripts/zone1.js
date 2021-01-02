import Game from '../game.js'
import Guardia from './guardia.js';
import Monje from './monje.js';
export default class Zone1 extends Game {
  constructor() {
    super('Zone1','Zone2',380,32,592,82, 'tilemap');
  }
  create(){
    super.create();
    this.add.text(20,20,"Esta es la zona 1, entra en el recuadro con ambos personajes para pasar de zona");

        
           
    }
    
}