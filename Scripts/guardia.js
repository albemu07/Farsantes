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
        this.velocidad = 100;
        this.horizontal =horizontal;
        if (this.horizontal)
        {
            this.vision.x+= 70;
            this.vision.y +=30;
        }
        else{
            this.vision.x+=30;
            this.vision.y+=70;
        }
 
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
            this.moveV();
        }
        
    }

    moveH()
    {
        if(this.x-10 <= this.Pos1X)
            {
                this.PosX = this.Pos2X
                this.PosY = this.Pos2Y 
                this.object.setTexture('guardiaR');
                this.vision.flipY= true;
                this.vision.x = 60;
                
            }
            if(this.x+10 >= this.Pos2X)
            {
                this.PosX = this.Pos1X
                this.PosY = this.Pos1Y 
                this.object.setTexture('guardiaL');
                this.vision.flipY= false;
                this.vision.x = 0;
                
            }
    }
    moveV()
    {
        if(this.y-10 <= this.Pos1Y)
            {
                this.PosX = this.Pos2X
                this.PosY = this.Pos2Y 
                this.object.setTexture('guardiaF');
                this.vision.flipY= true;
                this.vision.y =60;
                
            }
            if(this.y+10>= this.Pos2Y)
            {
                this.PosX = this.Pos1X
                this.PosY = this.Pos1Y 
                this.object.setTexture('guardiaB');
                this.vision.flipY= false;
                this.vision.y = 0;
                
            }
    }


}