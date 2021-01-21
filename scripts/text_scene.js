export default class TextScene extends Phaser.Scene{
    constructor(textScene,nextZone,text1,text2){
        super({key: textScene})
        this.nextZone=nextZone;
        this.text1=text1;
        this.text2=text2;
        this.score;
    }

    init(data){
        this.score= data.score
        this.effectSound=data.effSound
        this.musicSound=data.mSound
    }

    create(){

        //Fondo
        this.background=this.add.image(0,0,'textBackground').setOrigin(0,0).setAlpha(0)
        //Crear textos
        this.text1=this.add.image(0,0,this.text1).setOrigin(0,0).setAlpha(0)
        this.text2=this.add.image(0,0,this.text2).setOrigin(0,0).setAlpha(0)
        this.continue=this.add.image(443,560,'continueButton').setAlpha(0)

        //Crear timeline
        var timeline=this.tweens.createTimeline();

        timeline.add({
            targets: this.background,
            alpha:1,
            duration:2000,
            completeDelay:1000,
            onComplete:()=>{
            }
        })

        //Fade in del texto 1
        timeline.add({
            targets: this.text1,
            alpha:1,
            duration:1000,
            completeDelay:2000,
            onComplete:()=>{
            }
        })

        //Fade in del texto 2
        timeline.add({
            targets: this.text2,
            alpha:1,
            duration:1000,
            completeDelay:2000,
            //Poco después de completar el fade in del texto 2 se crea un botón para pasar a la siguiente zona
            onComplete:()=>{

            }
        })

        timeline.add({
            targets: this.continue,
            alpha:1,
            duration:1000,
            completeDelay:10,
            //Poco después de completar el fade in del texto 2 el botón se revela y es posible pulsarlo
            onComplete:()=>{
                //Interacciones
                this.continue.setInteractive();

                //Cambio de tamaño al pasar el ratón por encima
                this.continue.on('pointerover',()=>{this.continue.setScale(1.1)})
                this.continue.on('pointerout',()=>{this.continue.setScale(1)})

                //Funciones al pulsar
                this.continue.on('pointerdown', ()=>{this.fadeOut()})
            }
        })


        timeline.play();
    }

    fadeOut(){
        this.tweens.add({
            targets:[this.text1,this.text2,this.continue,this.background],
            alpha:0,
            duration:1000,
            completeDelay:100,
            onComplete:()=>{
                this.scene.start(this.nextZone,{effSound:this.effectSound, mSound:this.musicSound, score: this.score})
            }
        })
    }

}