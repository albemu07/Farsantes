import Game from '../game.js'
import Guardia from './guardia.js';
import Monje from './monje.js';
export default class Zone1 extends Game {
  constructor() {
    super('Zone1','Zone2',32,320,32,352, 'tilemap2');
  }    
}