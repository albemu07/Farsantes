export default class Vision extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y,sprite)
    {
        super(scene,x,y,sprite);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.visible =false;      
    }

    create()
    {
    }

    preUpdate()
    {
    }
}