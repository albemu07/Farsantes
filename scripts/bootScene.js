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
        this.load.image('guardiaL','./Assets/Guard/guardiaLeft.png');
        this.load.image('guardiaR','./Assets/Guard/guardiaRight.png');
        this.load.image('guardiaF','./Assets/Guard/guardiaFront.png');
        this.load.image('guardiaB','./Assets/Guard/guardiaBack.png');
        this.load.image('monjeL','./Assets/Nun/monjeLeft.png');
        this.load.image('monjeR','./Assets/Nun/monjeRight.png');
        this.load.image('monjeF','./Assets/Nun/monjeFront.png');
        this.load.image('monjeB','./Assets/Nun/monjeBack.png');
        this.load.image('dialogo','./Assets/Guard/dialogo.png')
        this.load.image('ring', '/Assets/ring/ring.png');
        this.load.image('mud', '/Assets/Mud/mod.png');
        this.load.image('map', './Assets/Tile/SpriteSetBien.png');
    
        this.load.image('vista','./Assets/SpriteSheet/deteccion.png') ;
        this.load.image('BoxSprite', './Assets/Box/box.png');
        this.load.image('Trigger','./Assets/Mechanisms/nextZoneTrigger.png');
        this.load.spritesheet('Lever1','./Assets/Lever/lever1.png',{frameWidth:32,frameHeight:32});
        this.load.spritesheet('Lever2','./Assets/Lever/lever2.png',{frameWidth:32,frameHeight:32});
        this.load.image('LeverOpen','./Assets/Lever/Lever_Open.png');
        this.load.image('LeverClose','./Assets/Lever/Lever_Close.png');
        this.load.spritesheet('DoorOpen','./Assets/Door/door_Open.png',{frameWidth:920,frameHeight:1127});
        this.load.spritesheet('DoorClose','./Assets/Door/door_Close.png',{frameWidth:820,frameHeight:1035});
        this.load.tilemapTiledJSON('tilemap', './Assets/Tile/nivelPrueba.json');

        //Placa de presión
        this.load.image('plateUnpressed','./Assets/PresurePlate/plateUnpressed.png')
        this.load.image('platePressed','./Assets/PresurePlate/platePressed.png')


        //Assets del menú
        this.load.image('menuBackground','./Assets/Menu/menuBackground1.png')
        this.load.image('settingsBackground','./Assets/Menu/menuBackground2.png')
        this.load.image('pauseBackground','./Assets/Menu/menuBackground3.png')
        this.load.image('playButton','./Assets/Menu/PlayButton.png')
        this.load.image('settingsButton','./Assets/Menu/SettingsButton.png')
        this.load.image('backButton','./Assets/Menu/BackButton.png')
        this.load.image('exitButton','./Assets/Menu/exitButton.png')
        this.load.image('gameButton','./Assets/Menu/gameButton.png')

        



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
            frameRate:3,
            repeat: 0
          });
      
          this.anims.create({
            key:'CloseDoor',
            frames: this.anims.generateFrameNumbers('DoorClose'),
            frameRate:3,
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