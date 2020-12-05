import Enemigo from './enemigo.js'
export default class Guardia extends Enemigo
{
    constructor(scene,x,y,x2,y2,horizontal,sprite)
    {
        super(scene, x, y, sprite);
        this.pos1X = x;
        this.pos1Y = y;
        this.pos2X =x2;
        this.pos2Y =y2;
        this.posX = (this.pos1X+this.pos2X)/2;
        this.posY = (this.pos1Y+this.pos2Y)/2;
        this.velocidad = 60;
        this.distraida =false;
        this.horizontal =horizontal;
        if (this.horizontal)
        {
            this.vision.x= 70;
            this.vision.y =30;
        }
        else{
            this.vision.x=30;
            this.vision.y=70;
        }
 
    }
    preUpdate()
    {

        this.scene.physics.moveTo(this, this.posX,this.posY, this.velocidad);
            
        if (this.horizontal)
        {
            this.vision.setAngle(-90);
            
            this.moveH();
        }  
        else 
        {
            this.moveV();
        }
        if (!this.distraida)
        {
            this.velocidad =60;
        }
        else 
        {
            this.vision.visible =false;
            this.velocidad=0;
        }
        
        

        
    }

    distract(active)
    {
        this.distraida =active;

    }
    moveH()
    {
        if(this.x-10 <= this.pos1X)
            {
                this.posX = this.pos2X
                this.posY = this.pos2Y 
                this.object.setTexture('guardiaR');
                this.vision.flipY= true;
                this.vision.x = 60;
                
            }
            if(this.x+10 >= this.pos2X)
            {
                this.posX = this.pos1X
                this.posY = this.pos1Y 
                this.object.setTexture('guardiaL');
                this.vision.flipY= false;
                this.vision.x = 0;
                
            }
    }
    moveV()
    {
        if(this.y-10 <= this.pos1Y)
            {
                this.posX = this.pos2X
                this.posY = this.pos2Y 
                this.object.setTexture('guardiaF');
                this.vision.flipY= true;
                this.vision.y =60;              
            }
            if(this.y+10>= this.pos2Y)
            {
                this.posX = this.pos1X
                this.posY = this.pos1Y 
                this.object.setTexture('guardiaB');
                this.vision.flipY= false;
                this.vision.y = 0;               
            }
    }


}