export default class Box extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y,sprite){
        super(scene, x, y, sprite);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setSize(500,500,true);
        this.setScale(0.20);
        this.body.setCollideWorldBounds();
        this.body.setImmovable(true);
        this.cursors = this.scene.input.keyboard.addKeys({
            grab: Phaser.Input.Keyboard.KeyCodes.C,
            grabb: Phaser.Input.Keyboard.KeyCodes.M
        });
    }

    preUpdate(time, delta){
        super.preUpdate(time,delta);
        
    }

    moveAlong(veloX, veloY){
        if (this.cursors.grab.isDown || this.cursors.grabb.isDown){
            this.body.setVelocityX(veloX);
            this.body.setVelocityY(veloY);
        }
        else{
            this.body.setVelocityY(0);
            this.body.setVelocityX(0);
            // console.log('caca');
        } 
    }
}