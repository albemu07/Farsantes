import Objeto from './objeto.js';
export default class Ring extends Phaser.GameObjects.Container {
    constructor(scene, x, y,value,angle){
        super(scene, x, y);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.setCollideWorldBounds();
        this.value = value;
        this.body.setSize(100,100);
        this.body.immovable = true;
        this.setAngle(angle);
        this.scene= scene;
        this.checkAnim();
        this.ring = new Objeto(scene, 50, 50, this.sprite, 32, 32, 1, false);
        this.add(this.ring);
        this.took = scene.sound.add("gotRing");  
    }
    checkAnim()
    {
        if (this.value ===100)
        {
            this.sprite='ringRC';
            this.sprite2='ringR';
        }        
        else if (this.value ===200)
        {
            this.sprite='ringGC';
            this.sprite2='ringG';
        }        
        else if (this.value ===300)
        {
            this.sprite='ringBC';
            this.sprite2='ringB';
        }        
        else if (this.value ===400)
        {
            this.sprite='ringYC';
            this.sprite2='ringY';
        }        
    }
    animate()
    {
        this.ring.setTexture(this.sprite2);
    }
    taken(){
        //animación
        this.took.play();
        return this.value;
        
    }
}