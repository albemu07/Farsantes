export default class Box extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y,sprite){
        super(scene, x, y, sprite);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setSize(500,500,true);
        this.setScale(0.20);
        this.body.setCollideWorldBounds();
        this.body.setImmovable(true);
        this.radio = 55;
        this.cursors = this.scene.input.keyboard.addKeys({
            grab: Phaser.Input.Keyboard.KeyCodes.C,
            grabb: Phaser.Input.Keyboard.KeyCodes.M
        });
    }

    preUpdate(time, delta){
        super.preUpdate(time,delta);
        
    }

    moveAlong(playerVelocity, playerPosX, playerPosY){
        this.posX=this.x + ((500*0.20)/2);
        this.posY=this.y + ((500*0.20)/2);
        this.mod = Math.sqrt(Math.pow(this.posX, 2)+Math.pow(this.posY, 2));
        this.playerMod = Math.sqrt(Math.pow(playerPosX, 2)+Math.pow(playerPosY, 2));
        if(Math.abs(this.mod - this.playerMod) < this.radio){
            this.body.setVelocityX(playerVelocity.x);
            this.body.setVelocityY(playerVelocity.y);
        }
        else{
            this.body.setVelocityX(0);
            this.body.setVelocityY(0);
        }
    }
}