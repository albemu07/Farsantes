import Player from './player.js';
export default class Countess extends Player {
    constructor(scene, x, y, sprite, gamepad) {
      super(scene, x, y, sprite, 0.7, 25, 25, 'IdleCountessAnim', 'RunCountessAnim', gamepad);
      // super.Countess = new Player(scene, x, y,sprite, 0.6, 320, 320);
      // var player = new Player(scene, x, y,sprite, 0.6, 320, 320);
      this.xIni=x;
      this.yIni=y;
      this.cursors = this.scene.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D,
        grab: Phaser.Input.Keyboard.KeyCodes.C,
        stun: Phaser.Input.Keyboard.KeyCodes.C,
      });
    }

    respawn()
    {
       this.x = this.xIni;
       this.y = this.yIni;
    }
  }