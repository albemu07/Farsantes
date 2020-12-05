import Player from './player.js';
export default class Buffoon extends Player {
    constructor(scene, x, y,sprite) {
      super(scene, x, y, sprite, 3, 40, 45, 'IdleBuffoonAnim', 'RunBuffoonAnim');
      this.cursors = this.scene.input.keyboard.createCursorKeys();

    }

    respawn()
    {
       this.x = 0;
       this.y =0;
    }
  }