import Enemigo from './enemigo.js'
export default class Guardia extends Enemigo
{
    constructor(scene,type,route,circle,sprite,anim)
    {
        super(scene,route[0][0],route[0][1],type,route,circle, sprite,anim);

        this.velocidad = 60;
        this.distraida =false;
        this.stunTime =0;

        this.expresion = ['Saludos, señora Marquesa', 'Ando buscando a un malandrín','¡Ven aquí, bellaco pisaverde!','Habrase visto semejante liante','No es más que un gaznápiro','Ese zascandil no merece su atención','Muéstrate, gazmuño cagalindes'];
        this.conv =this.expresion[ Math.floor(Math.random() * 7)];
        this.textConv = this.scene.add.text(this.x,this.object.displayHeight,this.conv);
        this.textConv.visible=false;
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
                fontFamily: 'liliput',
                fontSize: '18px',
                stroke: '#9a561c',
                strokeThickness: 1.5,
                color: '#000000',
                backgroundColor: '#d0a874',
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