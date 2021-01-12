export default class Menu extends Phaser.Scene{
    constructor(){
        super({key: 'Menu'})
    }

    create(){
        const config = {
            mute:false,
            volume: 0.3,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay:0
        }
        this.music = this.sound.add("music", config);

        //Fondo
        this.add.image(0,0,'menuBackground').setOrigin(0,0);

        //Botones
        this.play=this.add.image(443,320,'playButton').setScale(1.2);
        this.settings=this.add.image(443,480,'settingsButton').setScale(1.2);

        //Interacciones
        this.play.setInteractive();
        this.settings.setInteractive();

        //Cambio de tamaño al pasar el ratón por encima
        this.play.on('pointerover',()=>{this.play.setScale(1.4)});
        this.play.on('pointerout',()=>{this.play.setScale(1.2)});

        this.settings.on('pointerover',()=>{this.settings.setScale(1.4)})
        this.settings.on('pointerout',()=>{this.settings.setScale(1.2)})

        //Funciones al pulsar
        this.play.on('pointerdown', ()=>{
            this.music.play();
            // this.music.setLoop(true);
            this.scene.start('Zone1')})
        this.settings.on('pointerdown', ()=>{this.scene.start('Settings',{pause: false})})
    }
}