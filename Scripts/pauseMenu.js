export default class PauseMenu extends Phaser.Scene{
    constructor(){
        super({key: 'pauseMenu'})
    }

    init(data){
        this.zone=data.zone;
    }

    create(){

        //Fondo
        this.add.image(0,0,'pauseBackground').setOrigin(0,0)

        //Botones
        this.back=this.add.image(400,300,'gameButton')
        this.settings=this.add.image(400,450,'settingsButton')

        //Interacciones
        this.back.setInteractive();
        this.settings.setInteractive();

        //Cambio de tamaño al pasar el ratón por encima
        this.back.on('pointerover',()=>{this.back.setScale(1.2)})
        this.back.on('pointerout',()=>{this.back.setScale(1)})

        this.settings.on('pointerover',()=>{this.settings.setScale(1.2)})
        this.settings.on('pointerout',()=>{this.settings.setScale(1)})

        //Funciones al pulsar
        this.back.on('pointerdown',()=>{this.scene.wake(this.zone); this.scene.stop()})
        this.settings.on('pointerdown',()=>{this.scene.launch('Settings',{pause: true}); this.scene.sleep()})
    }
}