import Object from './object.js';
import Vision from './vision.js';

export default class Enemigo extends Phaser.GameObjects.Container
{
    constructor(scene,x,y,sprite)
    {
        super(scene,x,y);
        scene.add.existing(this);
        scene.physics.world.enable(this);
       
        
        this.vision = new Vision (scene,0,0,'vista');
        this.object = new Object(scene,0,0,sprite);
        this.add(this.object);
        this.add(this.vision);
        this.escena = scene;
        
    }
    
}