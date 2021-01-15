export default class Menu extends Phaser.Scene{
    constructor(){
        super({key: 'Menu'});
    }

    init(data){
        this.effectsSound=data.effSound;
        this.musicSound=data.mSound;
    }

    onWake(sys, data){
        this.effectsSound=data.effSound;
        this.musicSound=data.mSound;
    }

    create(){
        this.events.on('wake', this.onWake, this);
        const config = {
            mute:false,
            volume: 0.3*(this.musicSound/100),
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay:0
        }
        this.music = this.sound.add("music", config);
        this.music.play();
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
            // this.music.setLoop(true);
            this.scene.start('finalScene', {effSound:this.effectsSound, mSound:this.musicSound, score: 0}), this.scene.stop()});
        this.settings.on('pointerdown', ()=>{this.scene.launch('Settings',{pause: false, effSound:this.effectsSound, mSound:this.musicSound})});
        
    }

    changeVolume(vol){
        this.music.setVolume(vol*0.3);
    }
}