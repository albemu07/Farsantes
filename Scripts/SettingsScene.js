export default class Settings extends Phaser.Scene{
    constructor(){
        super({key: 'Settings'})
    }

    init(data){
        this.pause=data.pause;
    }

    create(){

        //Fondo
        this.add.image(0,0,'settingsBackground').setOrigin(0,0)

        //Botones
        this.back=this.add.image(400,300,'backButton')

        //Interacciones
        this.back.setInteractive();

        //Cambio de tamaño al pasar el ratón por encima
        this.back.on('pointerover',()=>{this.back.setScale(1.2)})
        this.back.on('pointerout',()=>{this.back.setScale(1)})

        //Funciones al pulsar
        this.back.on('pointerdown',this.previousScene,this)
    }

    previousScene(){
        if(this.pause){
            this.scene.wake('pauseMenu');
            this.scene.stop();
        }
        else{
            this.scene.start('Menu');
        }
    }
}