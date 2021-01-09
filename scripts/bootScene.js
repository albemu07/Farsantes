export default class Boot extends Phaser.Scene{
    constructor(){
        super({key: 'Boot'})
    }

    preload(){
        //Carga de todos los recursos
        this.load.spritesheet('IdleBuffoon','./assets/buffoon/idle.png',{frameWidth:150,frameHeight:150});
        this.load.spritesheet('RB','./assets/buffoon/run.png',{frameWidth:150,frameHeight:150});
        this.load.spritesheet('RunBuffoon','./assets/buffoon/arlequin.png',{frameWidth:32,frameHeight:32});
        this.load.spritesheet('IdleCountess','./assets/countess/idle.png',{frameWidth:320,frameHeight:320});
        this.load.spritesheet('RC','./assets/countess/run.png',{frameWidth:320,frameHeight:320});
        this.load.spritesheet('RunCountess','./assets/countess/markesa.png',{frameWidth:32,frameHeight:32});
        this.load.image('guardiaL','./assets/guard/guardiaLeft.png');
        this.load.image('guardiaR','./assets/guard/guardiaRight.png');
        this.load.image('guardiaF','./assets/guard/guardiaFront.png');
        this.load.image('guardiaB','./assets/guard/guardiaBack.png');
        this.load.image('monjeL','./assets/nun/monjeLeft.png');
        this.load.image('monjeR','./assets/nun/monjeRight.png');
        this.load.image('monjeF','./assets/nun/monjeFront.png');
        this.load.image('monjeB','./assets/nun/monjeBack.png');
        this.load.image('ring', '/assets/ring/ring.png');
        this.load.image('ringBC', '/assets/ring/ringBlueClose.png')
        this.load.image('ringB', '/assets/ring/ringBlue.png')
        this.load.image('ringGC', '/assets/ring/ringGreenClose.png')
        this.load.image('ringG', '/assets/ring/ringGreen.png')
        this.load.image('ringRC', '/assets/ring/ringRedClose.png')
        this.load.image('ringR', '/assets/ring/ringRed.png')
        this.load.image('ringYC', '/assets/ring/ringYellowClose.png')
        this.load.image('ringY', '/assets/ring/ringYellow.png')
        this.load.image('mud', '/assets/mud/mod.png');
        this.load.image('endTriggerText','/assets/menu/endTriggerText.png')
        //this.load.image('map', './assets/tile/spriteSetBien.png');
    
        this.load.image('vista','./assets/spriteSheet/deteccion.png') ;
        this.load.image('BoxSprite', './assets/box/box.png');
        this.load.image('Trigger','./assets/mechanisms/nextZoneTrigger.png');
        this.load.spritesheet('Lever1','./assets/lever/lever1.png',{frameWidth:32,frameHeight:32});
        this.load.spritesheet('Lever2','./assets/lever/lever2.png',{frameWidth:32,frameHeight:32});
        this.load.image('LeverOpen','./assets/lever/leverOpen.png');
        this.load.image('LeverClose','./assets/lever/leverClose.png');
        this.load.image('DoorClosed','./assets/door/doorClose.png');
        this.load.spritesheet('DoorOpen','./assets/door/openDoor.png',{frameWidth:38,frameHeight:38});        
        this.load.spritesheet('DoorClose','./assets/door/closeDoor.png',{frameWidth:38,frameHeight:38});
        this.load.tilemapTiledJSON('tilemap', './assets/tile/nivelPrueba.json');
        this.load.tilemapTiledJSON('tilemap1', './assets/tile/zone1.json');
        this.load.tilemapTiledJSON('tilemap2', './assets/tile/zone2.json');
        this.load.tilemapTiledJSON('tilemap3', './assets/tile/zone3.json');
        this.load.tilemapTiledJSON('tilemap4', './assets/tile/pruebaGuardia.json');
        this.load.image('map', './assets/tile/spriteSet.png');
        this.load.image('map2', './assets/tile/spriteSetNight.png');

        //Placa de presión
        this.load.image('plateUnpressed','./assets/presurePlate/plateUnpressed.png')
        this.load.image('platePressed','./assets/presurePlate/platePressed.png')


        //Assets del menú
        this.load.image('menuBackground','./assets/menu/menuBackground.png')
        this.load.image('settingsBackground','./assets/menu/settingsBackground.png')
        this.load.image('pauseBackground','./assets/menu/pauseBackground.png')
        this.load.image('playButton','./assets/menu/playButton.png')
        this.load.image('settingsButton','./assets/menu/settingsButton.png')
        this.load.image('backButton','./assets/menu/backButton.png')
        this.load.image('exitButton','./assets/menu/exitButton.png')
        this.load.image('gameButton','./assets/menu/gameButton.png')

        //Assets de las escenas de texto
        this.load.image('textBackground','./assets/menu/textBackground.png')
        this.load.image('text11','./assets/menu/text1.png')
        this.load.image('text12','./assets/menu/text2.png')
        this.load.image('continueButton','./assets/menu/continueButton.png')

        



        //Al cargar todos los recursos, se inicia la escena Menú
        this.load.on('complete', function(){
            console.log('Preload complete');
            this.scene.start('Menu');
        },this);
    }


    create(){
        
        //Animaciones de ambos personajes
        this.anims.create({
            key:'IdleBuffoonAnim',
            frames: this.anims.generateFrameNumbers('IdleBuffoon'),
            frameRate:4,
            repeat: -1
          });
      
          this.anims.create({
            key:'RunBuffoonAnim',
            frames: this.anims.generateFrameNumbers('RunBuffoon'),
            frameRate:6,
            repeat: -1
          });
      
          
          this.anims.create({
            key:'IdleCountessAnim',
            frames: this.anims.generateFrameNumbers('IdleCountess'),
            frameRate:3,
            repeat: -1
          });
      
          
          this.anims.create({
            key:'RunCountessAnim',
            frames: this.anims.generateFrameNumbers('RunCountess'),
            frameRate:6,
            repeat: -1
          });
      
          //Animaciones de palanca y puerta
          this.anims.create({
            key:'DesactivateLever',
            frames: this.anims.generateFrameNumbers('Lever1'),
            frameRate:6,
            repeat: 0
          });
      
          this.anims.create({
            key:'OpenDoor',
            frames: this.anims.generateFrameNumbers('DoorOpen'),
            frameRate:7,
            repeat: 0
          });
      
          this.anims.create({
            key:'CloseDoor',
            frames: this.anims.generateFrameNumbers('DoorClose'),
            frameRate:7,
            repeat: 0
          });
      
          this.anims.create({
            key:'ActivateLever',
            frames: this.anims.generateFrameNumbers('Lever2'),
            frameRate:6,
            repeat: 0
          });
    }
}