export default class Objeto extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, sprite, colliderX, colliderY, scale, immov){
        super(scene, x, y, sprite);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setSize(colliderX,colliderY,true)
        this.setScale(scale);
        this.body.setCollideWorldBounds();
        this.body.immovable = immov;
    }
}