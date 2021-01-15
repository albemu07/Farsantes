export default class PauseMenu extends Phaser.Scene{
    constructor(){
        super({key: 'pauseMenu'})
    }

    init(data){
        this.zone=data.zone;
        this.effectSound=data.effSound;
        this.musicSound=data.mSound;
    }

    onWake(sys, data){
        this.effectSound=data.effSound;
        this.musicSound=data.mSound;
    }

    create(){
        this.events.on('wake', this.onWake, this);
        //Fondo
        this.add.image(0,0,'pauseBackground').setOrigin(0,0)

        //Botones
        this.back=this.add.image(443,320,'gameButton').setScale(1.2)
        this.settings=this.add.image(443,480,'settingsButton').setScale(1.2)

        //Interacciones
        this.back.setInteractive();
        this.settings.setInteractive();

        //Cambio de tamaño al pasar el ratón por encima
        this.back.on('pointerover',()=>{this.back.setScale(1.4)})
        this.back.on('pointerout',()=>{this.back.setScale(1.2)})

        this.settings.on('pointerover',()=>{this.settings.setScale(1.4)})
        this.settings.on('pointerout',()=>{this.settings.setScale(1.2)})

        //Funciones al pulsar
        this.back.on('pointerdown',()=>{this.scene.wake(this.zone,{effSound:this.effectSound, mSound:this.musicSound}); this.scene.stop()})
        this.settings.on('pointerdown',()=>{this.scene.launch('Settings',{pause: true, effSound:this.effectSound, mSound:this.musicSound}); 
        this.scene.sleep()});
    }
}