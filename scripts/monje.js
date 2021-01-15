import Enemigo from './enemigo.js'
export default class Monje extends Enemigo
{
    constructor(scene,type,route,circle,sprite,anim)
    {
        super(scene,route[0][0],route[0][1],type,route,circle, sprite,anim);

        this.velocidad = 50;
 
    }
    preUpdate(time, delta)
    {
        this.scene.physics.moveTo(this, this.posX,this.posY, this.velocidad);
        this.object.anims.play(this.animation,true);   
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