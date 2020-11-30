export default class Object extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x,y,sprite)
    {
        super (scene, x,y,sprite);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.setCollideWorldBounds(true);
        this.body.immovable = true;
    }
}