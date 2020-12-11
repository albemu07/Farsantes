import Enemigo from './enemigo.js'
export default class Guardia extends Enemigo
{
    constructor(scene,x,y,x2,y2,horizontal,type,sprite)
    {
        super(scene, x, y,x2,y2,horizontal,type, sprite);

        this.velocidad = 50;
 
    }
    preUpdate()
    {
        this.scene.physics.moveTo(this, this.posX,this.posY, this.velocidad);
            
        if (this.horizontal)
        {
            this.moveH();
        }  
        else 
        {
            this.moveV();
        }
    }
   

}