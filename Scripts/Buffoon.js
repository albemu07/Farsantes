import Player from './player.js';
export default class Buffoon extends Player {
    constructor(scene, x, y,sprite) {
      super(scene, x, y, sprite, 0.7, 40, 45, 'IdleBuffoonAnim', 'RunBuffoonAnim');
      this.xIni=x;
      this.yIni=y;
      this.cursors = this.scene.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.UP,
        down: Phaser.Input.Keyboard.KeyCodes.DOWN,
        left: Phaser.Input.Keyboard.KeyCodes.LEFT,
        right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
        grab: Phaser.Input.Keyboard.KeyCodes.C
      });
    }

    respawn()
    {
       this.x = this.xIni;
       this.y = this.yIni;
    }
  }