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

        
        

        this.expresion = ['Hola Marquesa', 'Has visto a un farsante', 'arrestar a Arlequín', 
        'Es demasiado astuto', 'Mañana descaso', 'Hace mucho frío', 'Tengo que vigilar'];
        this.conv =this.expresion[ Math.floor(Math.random() * 7)];
        this.textConv = this.scene.add.text(this.x,this.object.displayHeight,this.conv);
        this.textConv.visible=false;

        

 
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
            
            this.textConv.visible=true;
            //console.log("tiempo distraido: "+this.stunTime);
            if (this.stunTime >500)
            {
                this.stunTime =0;
                this.distraida =false;
                this.textConv.visible =false;
                console.log("Dejo de distraer");

            }
        }
    }
    setText()
    {
        if (!this.textConv.visible)
        {
            this.conv =this.expresion[ Math.floor(Math.random() * 7)];
            this.textConv= this.scene.add.text(this.x,this.y,this.conv,{
                fontFamily: 'Arial',
                fontSize: '10px',
                stroke: '#000000',
                strokeThickness: 3,
                color: '#00B1FF',
                backgroundColor: '#FFFFFF',
            });
            console.log(this.conv );
            if (this.horizontal)
                this.textConv.y = this.y-25;
            else
            {
                if (this.vision.flipY)
                    this.textConv.y= this.y-15;
                else
                    this.textConv.y = this.y+10;
            }
        }
        
    }

    


   

}