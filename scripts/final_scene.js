export default class FinalScene extends Phaser.Scene{
    constructor(){
        super({key: 'finalScene'})
        this.score
    }

init(data){
        this.score= data.score
    }

    create(){

        //Fondo
        this.background=this.add.image(0,0,'textBackground').setOrigin(0,0).setAlpha(0)
        //Crear textos
        this.text1=this.add.image(0,0,'finalText1').setOrigin(0,0).setAlpha(0)
        this.text2=this.add.image(0,0,'finalText2').setOrigin(0,0).setAlpha(0)
        this.scoreText=this.add.text(448,400,this.score,{
            fontFamily: 'liliput',
            fontSize: '50px',
            color: '#fffff',
        }).setOrigin(0.5).setAlpha(0)

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
            completeDelay:500,
            //Poco después de completar el fade in del texto 2 se muestra la puntuación
            onComplete:()=>{
            }
        })

        timeline.add({
            targets: this.scoreText,
            alpha:1,
            duration:1000,
        })

        timeline.play();
    }

}