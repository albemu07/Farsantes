import Player from './Player.js';
export default class Buffoon extends Player {
    constructor(scene, x, y,sprite) {
      super(scene, x, y, sprite, 4, 40, 45);
      this.cursors = this.scene.input.keyboard.createCursorKeys();
    }
    
    preUpdate(time,delta) {
        super.preUpdate(time, delta, this.cursors, 'IdleBuffoonAnim', 'RunBuffoonAnim');
    }
  }