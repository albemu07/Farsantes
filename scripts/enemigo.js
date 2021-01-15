import Objecto from './objeto.js';

export default class Enemigo extends Phaser.GameObjects.Container
{
    constructor(scene,x,y,type,route,circle, sprite,anim)
    {
        super(scene,x,y);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.setCollideWorldBounds();
        this.escena = scene;
        this.tipo =type;
        this.route = route;
        this.circle = circle;
        this.animation=anim;
        this.vision = new Objecto (scene,0,0,'vista',32,32,1,false);
        this.vision.alpha =0.5;
        this.object = new Objecto(scene,0,0,sprite,64,64,1,false);
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
        if(Math.abs(this.pos1X-this.pos2X ) < Math.abs(this.pos1Y-this.pos2Y))
            this.horizontal =false;
        else 
            this.horizontal =true;

        if (this.horizontal)
        {
            this.vision.setAngle(-90);

            this.body.setSize(64,42);

            if (this.pos1X>this.pos2X)
            {
                this.leftAnim();
            }
            else 
                this.rightAnim();
        }
        else{
            this.vision.setAngle(0);
            this.body.setSize(42,64);
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
        
        this.object.angle = 270;
        this.vision.flipY= false;
        this.vision.x =16;
        this.vision.y=21;
        this.object.x=48;
        this.object.y=12;
    }
    rightAnim()
    {
        this.object.angle = 90;
        this.vision.flipY= true;
        this.vision.x =48;
        this.vision.y=21;
        this.object.x =16;
        this.object.y=30;
    }
    frontAnim()
    {
        this.object.angle = 180;
        this.vision.flipY= true;
        this.vision.y =48; 
        this.vision.x=21;
        this.object.y =16;  
        this.object.x=12; 
    }
    backAnim()
    {
        this.object.angle = 0;
        this.vision.flipY= false;
        this.vision.y = 16;  
        this.vision.x=21;
        this.object.y= 48;  
        this.object.x=30;
    }

    
}