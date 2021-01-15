export default class Settings extends Phaser.Scene{
    constructor(){
        super({key: 'Settings'})
    }

    init(data){
        this.pause=data.pause;
        this.effectSound=data.effSound;
        this.musicSound=data.mSound;
    }

    create(){
        //Fondo
        this.add.image(0,0,'settingsBackground').setOrigin(0,0)

        //Botones
        this.effectsUp=this.add.image(600, 260, 'plusButton').setScale(1.2);
        this.effectsDown=this.add.image(290, 260, 'minusButton').setScale(1.2);
        this.musicUp=this.add.image(600, 390, 'plusButton').setScale(1.2);
        this.musicDown=this.add.image(290, 390, 'minusButton').setScale(1.2);
        this.back=this.add.image(443,520,'backButton').setScale(1.2);
        this.effectsText=this.add.text(380, 240, this.effectSound).setScale(5);
        this.musicText=this.add.text(380, 370, this.musicSound).setScale(5);

        //Interacciones
        this.back.setInteractive();
        this.effectsUp.setInteractive();
        this.effectsDown.setInteractive();
        this.musicUp.setInteractive();
        this.musicDown.setInteractive();

        //Cambio de tamaño al pasar el ratón por encima
        this.back.on('pointerover',()=>{this.back.setScale(1.4)});
        this.back.on('pointerout',()=>{this.back.setScale(1.2)});

        this.effectsUp.on('pointerover',()=>{this.effectsUp.setScale(1.4)});
        this.effectsUp.on('pointerout',()=>{this.effectsUp.setScale(1.2)});

        this.musicUp.on('pointerover',()=>{this.musicUp.setScale(1.4)});
        this.musicUp.on('pointerout',()=>{this.musicUp.setScale(1.2)});

        this.effectsDown.on('pointerover',()=>{this.effectsDown.setScale(1.4)});
        this.effectsDown.on('pointerout',()=>{this.effectsDown.setScale(1.2)});

        this.musicDown.on('pointerover',()=>{this.musicDown.setScale(1.4)});
        this.musicDown.on('pointerout',()=>{this.musicDown.setScale(1.2)});
        //Funciones al pulsar
        this.back.on('pointerdown',this.previousScene,this);
        this.effectsUp.on('pointerdown',this.upVolume, this);
        this.effectsDown.on('pointerdown',this.downVolume, this);
        this.musicUp.on('pointerdown',this.upMusic, this);
        this.musicDown.on('pointerdown',this.downMusic, this);
    }

    upVolume(){
        if(this.effectSound<100) this.effectSound++;
        this.effectsText.setText(this.effectSound);        
    }

    downVolume(){
        if(this.effectSound>0) this.effectSound--;
        this.effectsText.setText(this.effectSound);
    }

    upMusic(){
        if(this.musicSound<100) this.musicSound++;
        this.musicText.setText(this.musicSound);
        this.scene.get("Menu").changeVolume(this.musicSound/100);
    }

    downMusic(){
        if(this.musicSound>0) this.musicSound--;
        this.musicText.setText(this.musicSound);
        this.scene.get("Menu").changeVolume(this.musicSound/100);
    }

    previousScene(){
        if(this.pause){
            this.scene.wake('pauseMenu',{effSound:this.effectSound, mSound:this.musicSound});
            this.scene.stop();
        }
        else{
            this.scene.wake('Menu',{effSound:this.effectSound, mSound:this.musicSound});
            this.scene.stop();
        }
    }
}