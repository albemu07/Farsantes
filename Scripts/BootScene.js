export default class Boot extends Phaser.Scene{
    constructor(){
        super({key: 'Boot'})
    }

    preload(){
        //Carga de todos los recursos
        this.load.spritesheet('IdleBuffoon','./Assets/Buffoon/idle.png',{frameWidth:150,frameHeight:150});
        this.load.spritesheet('RunBuffoon','./Assets/Buffoon/run.png',{frameWidth:150,frameHeight:150});
        this.load.spritesheet('IdleCountess','./Assets/Countess/idle.png',{frameWidth:320,frameHeight:320});
        this.load.spritesheet('RunCountess','./Assets/Countess/run.png',{frameWidth:320,frameHeight:320});
        this.load.image('guardiaL','./Assets/SpriteSheet/guardiaLeft.png');
        this.load.image('guardiaR','./Assets/SpriteSheet/guardiaRight.png');
        this.load.image('guardiaF','./Assets/SpriteSheet/guardiaFront.png');
        this.load.image('guardiaB','./Assets/SpriteSheet/guardiaBack.png');
    
        this.load.image('vista','./Assets/SpriteSheet/deteccion.png') ;
        this.load.image('BoxSprite', './Assets/Box/box.png');
        this.load.image('Trigger','./Assets/Mechanisms/nextZoneTrigger.png');
        this.load.spritesheet('Lever1','./Assets/Lever/lever1.png',{frameWidth:352,frameHeight:208});
        this.load.spritesheet('Lever2','./Assets/Lever/lever2.png',{frameWidth:352,frameHeight:208});
        this.load.image('LeverOpen','./Assets/Lever/lever_Open.png');
        this.load.image('LeverClose','./Assets/Lever/lever_Close.png');
        this.load.spritesheet('DoorOpen','./Assets/Door/door_Open.png',{frameWidth:920,frameHeight:1127});
        this.load.spritesheet('DoorClose','./Assets/Door/door_Close.png',{frameWidth:820,frameHeight:1035});


        //Assets del menú
        this.load.image('menuBackground','./Assets/Menu/menuBackground1.png')
        this.load.image('settingsBackground','./Assets/Menu/menuBackground2.png')
        this.load.image('playButton','./Assets/Menu/PlayButton.png')
        this.load.image('settingsButton','./Assets/Menu/SettingsButton.png')
        this.load.image('backButton','./Assets/Menu/BackButton.png')



        //Al cargar todos los recursos, se inicia la escena Menú
        this.load.on('complete', function(){
            console.log('Preload complete');
            this.scene.start('Menu');
        },this);
    }
}