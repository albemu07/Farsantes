import Objeto from './objeto.js';
export default class Ring extends Phaser.GameObjects.Container {
    constructor(scene, x, y, sprite,sprite2,value,angle){
        super(scene, x, y);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.setCollideWorldBounds();
        this.value = value;
        this.body.setSize(100,100);
        this.body.immovable = true;
        this.setAngle(angle);
        this.sprite=sprite;
        this.sprite2=sprite2;
        this.scene= scene;
        this.ring = new Objeto(scene, 50, 50, sprite, 32, 32, 1, false);
        this.add(this.ring);
        
    }

    animate()
    {
        this.ring.setTexture(this.sprite2);
    }
    taken(){
        //animación
        return this.value;
        
    }
}