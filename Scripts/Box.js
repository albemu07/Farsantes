export default class Box extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y,sprite, scale){
        super(scene, x, y, sprite);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setSize(40,40,true);
        this.setScale(scale);
        this.body.setCollideWorldBounds();
        this.body.setInmovable(true);
    }
}