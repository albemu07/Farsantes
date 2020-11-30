import Enemigo from './enemigo.js'
export default class Guardia extends Enemigo
{
    constructor(scene,x,y,x2,y2,horizontal,sprite)
    {
        super(scene, x, y, sprite);
        this.Pos1X = x;
        this.Pos1Y = y;
        this.Pos2X =x2;
        this.Pos2Y =y2;
        this.PosX = (this.Pos1X+this.Pos2X)/2;
        this.PosY = (this.Pos1Y+this.Pos2Y)/2;
        this.velocidad = 40;

        this.horizontal =horizontal;
    
 
    }
    preUpdate()
    {
        this.scene.physics.moveTo(this, this.PosX,this.PosY, this.velocidad)

        if (this.horizontal)
        {
            this.vision.setAngle(-90);
            this.moveH();
        }
        else 
        {
            this.vision.setAngle(180);
            this.moveV();
        }
        
    }

    moveH()
    {
        if(this.x <= this.Pos1X)
            {
                this.PosX = this.Pos2X
                this.PosY = this.Pos2Y 
                this.vision.x = 60;
                 this.object.flipX=true;
                 this.vision.flipY= false;
                
            }
            if(this.x >= this.Pos2X)
            {
                this.PosX = this.Pos1X
                this.PosY = this.Pos1Y 
                this.vision.x = -20;
                this.object.flipX=false;
                this.vision.flipY= true;
                
            }
    }
    moveV()
    {
        if(this.y <= this.Pos1Y)
            {
                this.PosX = this.Pos2X
                this.PosY = this.Pos2Y 
                this.vision.x = 60;
                 this.vision.flipY= false;
                
            }
            if(this.y>= this.Pos2Y)
            {
                this.PosX = this.Pos1X
                this.PosY = this.Pos1Y 
                this.vision.y = -20;
                this.vision.flipY= true;
                
            }
    }


}