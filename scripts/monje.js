import Enemigo from './enemigo.js'
export default class Guardia extends Enemigo
{
    constructor(scene,type,route,circle,sprite)
    {
        super(scene,route[0][0],route[0][1],type,route,circle, sprite);

        this.velocidad = 50;
 
    }
    preUpdate()
    {
        this.scene.physics.moveTo(this, this.posX,this.posY, this.velocidad);
        this.object.anims.play(this.animacion,true);   
        if (this.circle)
        {
            this.moveCircle();
        }  
        else 
        {            
            this.moveRoundTrip();
        }

        
    }
   

}