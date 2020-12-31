import Objecto from './objeto.js';
import Vision from './vision.js';

export default class Enemigo extends Phaser.GameObjects.Container
{
    constructor(scene,x,y,type,route,circle, sprite)
    {
        super(scene,x,y);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.setCollideWorldBounds();
        this.escena = scene;
        this.tipo =type;
        this.route = route;
        this.circle = circle;
        this.setScale(0.4);
        this.vision = new Vision (scene,0,0,'vista');
        this.object = new Objecto(scene,30,30,sprite,100,100,1,false);
        this.add(this.object);
        this.add(this.vision);
        this.after =1;
        this.pos1X = x
        this.pos1Y = y
        this.pos2X = this.route[this.after][0];
        this.pos2Y = this.route[this.after][1];
        this.posX =this.pos2X;
        this.posY =this.pos2Y;
        this.checkHorizontal();
        this.operation =true;
        this.change= false;
        
    }

    moveCircle()
    {
        if (this.horizontal)
        {
            this.moveH();
        }
        else
        {
            this.moveV();
            
        }
        if (this.after=== this.route.length)
        {
            this.after=0;
        }
        if (this.change)
        {
            this.getPos2();
            this.change=false;
        }   
    }
    moveRoundTrip()
    {
        if (this.horizontal)
        {
            this.moveH();
        }
        else
        {
            this.moveV();
        }
        if (this.after=== this.route.length)
        {
            this.operation=false;
            this.after=this.route.length-2;
        }
        if (this.after === 0)
        {
            this.operation=true;
        }
        if (this.change)
        {
            this.getPos2();
            this.change=false;
        }    
    }

    checkHorizontal()
    {
        if(this.pos1X === this.pos2X)
            this.horizontal =false;
        else 
            this.horizontal =true;

        if (this.horizontal)
        {
            this.vision.setAngle(-90);

            this.body.setSize(90,60);

            if (this.pos1X>this.pos2X)
            {
                this.leftAnim();
            }
            else 
                this.rightAnim();
        }
        else{
            this.vision.setAngle(0);
            this.body.setSize(60,90);
            if (this.pos1Y>this.pos2Y)
            {
                this.backAnim();
            }
            else 
                this.frontAnim();
        }

    }
    getPos2()
    {
        this.pos2X= this.route[this.after][0];
        this.pos2Y= this.route[this.after][1];
        this.posX=this.pos2X;
        this.posY= this.pos2Y;
        this.checkHorizontal();
    }

    moveH()
    {
        if ((this.pos1X<this.pos2X&& this.x >= this.pos2X)||(this.pos1X>this.pos2X&& this.x <= this.pos2X))
        {
            this.getPos();
            this.change=true;

        }
    }
    moveV()
    {
        if ((this.pos1Y<this.pos2Y&& this.y >= this.pos2Y)||(this.pos1Y>this.pos2Y&& this.y <= this.pos2Y))
        {
            this.getPos();
            this.change=true;
        }
    }

    getPos()
    {
        this.pos1X = this.pos2X;
        this.pos1Y=this.pos2Y;
        this.x= this.pos1X;
        this.y = this.pos1Y;
        if (this.operation)
        {
            this.after++;
        }
        else{
            this.after--;
        }
    }
    leftAnim()
    {
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
        this.vision.y=30;
        this.object.x =60;
        this.object.y=30;
    }
    rightAnim()
    {
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
        this.vision.y=30;
        this.object.x =30;
        this.object.y=30;
    }
    frontAnim()
    {
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
        this.vision.x=30;
        this.object.y =30;  
        this.object.x=30; 
    }
    backAnim()
    {
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
        this.vision.x=30;
        this.object.y= 60;  
        this.object.x=30;
    }

    
}