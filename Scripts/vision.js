export default class Vision extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y,sprite)
    {
        super(scene,x,y,sprite);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.immovable= true;
        this.alpha =0.5;
        this.setScale(0.07);
    }

    create()
    {
    }

    preUpdate()
    {

        this.setCollideWorldBounds(true);
        
    }
}