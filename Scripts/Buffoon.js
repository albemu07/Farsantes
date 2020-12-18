import Player from './player.js';
export default class Buffoon extends Player {
    constructor(scene, x, y,sprite) {
      super(scene, x, y, sprite, 0.7, 40, 45, 'IdleBuffoonAnim', 'RunBuffoonAnim');
      this.cursors = this.scene.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.UP,
        down: Phaser.Input.Keyboard.KeyCodes.DOWN,
        left: Phaser.Input.Keyboard.KeyCodes.LEFT,
        right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
        grab: Phaser.Input.Keyboard.KeyCodes.N
      });
    }

    respawn()
    {
       this.x = 0;
       this.y =0;
    }
  }