import Objeto from './objeto.js';

export default class Caja extends Phaser.GameObjects.Container
{
    constructor(scene, x, y,sprite)
    {
        super(scene,x,y);
        
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.setCollideWorldBounds();
        this.radio = 120;
        this.myVelo = this.body.velocity;
        this.escena = scene;
        this.setScale(0.4);
        this.box = new Objeto(scene,32, 32,sprite, 500, 500, 0.1, true);
        this.object = new Objeto(scene,32,32,sprite, 650, 650, 0.1, true);
        this.add(this.object);
        this.add(this.box);
    }

    moveAlong(player){
        this.offsetX = this.box.body.center.x - player.body.center.x;
        this.offsetY = this.box.body.center.y - player.body.center.y;
        this.mod = Math.sqrt(Math.pow(this.offsetX, 2)+Math.pow(this.offsetY, 2));
        // this.playerMod = Math.sqrt(Math.pow(playerPosX, 2)+Math.pow(playerPosY, 2));
        if(Math.abs(this.mod) < this.radio){
            this.body.velocity = player.body.velocity;
            // this.body.setVelocity() = playerVelocity;
            // this.body.setVelocityX(playerVelocity.x);
            // this.body.setVelocityY(playerVelocity.y);
            return true;
        }
        else this.body.velocity = this.myVelo;
        return false;
    }

    stopMove(){
        if (this.body.velocity != this.myVelo)
        this.body.velocity = this.myVelo;
        return false;
    }
}