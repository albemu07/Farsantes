export default class Menu extends Phaser.Scene{
    constructor(){
        super({key: 'Menu'})
    }

    create(){

        //Fondo
        this.add.image(0,0,'menuBackground').setOrigin(0,0)

        //Botones
        this.play=this.add.image(400,280,'playButton')
        this.settings=this.add.image(400,420,'settingsButton')

        //Interacciones
        this.play.setInteractive();
        this.settings.setInteractive();

        //Cambio de tamaño al pasar el ratón por encima
        this.play.on('pointerover',()=>{this.play.setScale(1.2)})
        this.play.on('pointerout',()=>{this.play.setScale(1)})

        this.settings.on('pointerover',()=>{this.settings.setScale(1.2)})
        this.settings.on('pointerout',()=>{this.settings.setScale(1)})

        //Funciones al pulsar
        this.play.on('pointerdown', ()=>{this.scene.start('Zone1')})
        this.settings.on('pointerdown', ()=>{this.scene.start('Settings',{pause: false})})
    }
}