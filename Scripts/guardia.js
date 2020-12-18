import Enemigo from './enemigo.js'
import Dialogo from './dialogue.js'
export default class Guardia extends Enemigo
{
    constructor(scene,x,y,x2,y2,horizontal,type,sprite)
    {
        super(scene, x, y,x2,y2,horizontal,type, sprite);

        this.velocidad = 60;
        this.distraida =false;
        this.stunTime =0;
        this.conversacion = new Dialogo(scene,x,y,'dialogo');
        this.conversacion.body.visible =false;
 
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

        if (!this.distraida)
        {
            this.vision.visible =true;
            this.vision.body.enable =true;
            this.velocidad =60;
        }
        else 
        {
            this.vision.visible =false;
            this.velocidad=0;
            this.vision.body.enable =false;
            this.stunTime ++;
            if (this.horizontal)
        {
            this.conversacion.x = this.x+30;
            this.conversacion.y = this.y+10;
        }  
        else 
        {            
            this.conversacion.x = this.x+30;
            this.conversacion.y = this.y+10;
        }
            
            this.conversacion.visible = true;
            //console.log("tiempo distraido: "+this.stunTime);
            if (this.stunTime >500)
            {
                this.stunTime =0;
                this.distraida =false;
                this.conversacion.visible =false;
                console.log("Dejo de distraer");

            }
        }
    }

   

}