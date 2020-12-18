import Objecto from './objeto.js';
import Vision from './vision.js';

export default class Enemigo extends Phaser.GameObjects.Container
{
    constructor(scene, x, y,x2,y2,horizontal,type, sprite)
    {
        super(scene,x,y);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.setCollideWorldBounds();

        this.pos1X = x;
        this.pos1Y = y;
        this.pos2X =x2;
        this.pos2Y =y2;
        this.posX = (this.pos1X+this.pos2X)/2;
        this.posY = (this.pos1Y+this.pos2Y)/2;
        this.escena = scene;
        this.tipo =type;
        this.horizontal =horizontal;
        this.setScale(0.4);
        this.vision = new Vision (scene,0,0,'vista');
        this.object = new Objecto(scene,30,30,sprite);
        this.add(this.object);
        this.add(this.vision);
        
        
        

        if (this.horizontal)
        {
            this.vision.setAngle(-90);
            this.vision.x= 70;
            this.vision.y=30;

            this.body.setSize(90,60);
        }
        else{

            this.vision.x=30;
            this.vision.y=70;

            this.body.setSize(60,90);
        }
    }
    moveH()
    {
        if(this.x-10 <= this.pos1X)
            {
                this.posX = this.pos2X
                this.posY = this.pos2Y 
                if (this.tipo)
                {
                    this.object.setTexture('guardiaR');
                }
                else 
                {
                    this.object.setTexture('monjeR');
                }
                this.vision.flipY= true;
                this.vision.x = 60;
                this.object.x =30;
                
            }
            if(this.x+10 >= this.pos2X)
            {
                this.posX = this.pos1X
                this.posY = this.pos1Y 
                if (this.tipo)
                {
                    this.object.setTexture('guardiaL');
                }
                else 
                {
                    this.object.setTexture('monjeL');
                }
                this.vision.flipY= false;
                this.vision.x = 30;
                this.object.x =60;
                
            }
    }
    moveV()
    {
        if(this.y-10 <= this.pos1Y)
            {
                this.posX = this.pos2X
                this.posY = this.pos2Y 
                if (this.tipo)
                {
                    this.object.setTexture('guardiaF');
                }
                else 
                {
                    this.object.setTexture('monjeF');
                }
                this.vision.flipY= true;
                this.vision.y =60; 
                this.object.y =30;             
            }
            if(this.y+10>= this.pos2Y)
            {
                this.posX = this.pos1X
                this.posY = this.pos1Y 
                if (this.tipo)
                {
                    this.object.setTexture('guardiaB');
                }
                else 
                {
                    this.object.setTexture('monjeB');
                }
                this.vision.flipY= false;
                this.vision.y = 30;  
                this.object.y= 60;             
            }
    }


    
}