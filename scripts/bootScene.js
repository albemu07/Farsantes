export default class Boot extends Phaser.Scene{
    constructor(){
        super({key: 'Boot'})
    }

    preload(){
        //Carga de todos los recursos
        this.load.spritesheet('IdleBuffoon','./assets/buffoon/idle.png',{frameWidth:150,frameHeight:150});
        this.load.spritesheet('RunBuffoon','./assets/buffoon/run.png',{frameWidth:150,frameHeight:150});
        this.load.spritesheet('IdleCountess','./assets/countess/idle.png',{frameWidth:320,frameHeight:320});
        this.load.spritesheet('RunCountess','./assets/countess/run.png',{frameWidth:320,frameHeight:320});
        this.load.image('guardiaL','./assets/guard/guardiaLeft.png');
        this.load.image('guardiaR','./assets/guard/guardiaRight.png');
        this.load.image('guardiaF','./assets/guard/guardiaFront.png');
        this.load.image('guardiaB','./assets/guard/guardiaBack.png');
        this.load.image('monjeL','./assets/nun/monjeLeft.png');
        this.load.image('monjeR','./assets/nun/monjeRight.png');
        this.load.image('monjeF','./assets/nun/monjeFront.png');
        this.load.image('monjeB','./assets/nun/monjeBack.png');
        this.load.image('dialogo','./assets/guard/dialogo.png')
        this.load.image('ring', '/assets/ring/ring.png');
        this.load.image('mud', '/assets/mud/mod.png');
        this.load.image('map', './assets/tile/spriteSetBien.png');
    
        this.load.image('vista','./assets/spriteSheet/deteccion.png') ;
        this.load.image('BoxSprite', './assets/box/box.png');
        this.load.image('Trigger','./assets/mechanisms/nextZoneTrigger.png');
        this.load.spritesheet('Lever1','./assets/lever/lever1.png',{frameWidth:32,frameHeight:32});
        this.load.spritesheet('Lever2','./assets/lever/lever2.png',{frameWidth:32,frameHeight:32});
        this.load.image('LeverOpen','./assets/lever/leverOpen.png');
        this.load.image('LeverClose','./assets/lever/leverClose.png');
        this.load.spritesheet('DoorOpen','./assets/door/doorOpen.png',{frameWidth:920,frameHeight:1127});
        this.load.spritesheet('DoorClose','./assets/door/doorClosed.png',{frameWidth:820,frameHeight:1035});
        this.load.tilemapTiledJSON('tilemap', './assets/tile/nivelPrueba.json');

        //Placa de presión
        this.load.image('plateUnpressed','./assets/presurePlate/plateUnpressed.png')
        this.load.image('platePressed','./assets/presurePlate/platePressed.png')


        //Assets del menú
        this.load.image('menuBackground','./assets/menu/menuBackground1.png')
        this.load.image('settingsBackground','./assets/menu/menuBackground2.png')
        this.load.image('pauseBackground','./assets/menu/menuBackground3.png')
        this.load.image('playButton','./assets/menu/playButton.png')
        this.load.image('settingsButton','./assets/menu/settingsButton.png')
        this.load.image('backButton','./assets/menu/backButton.png')
        this.load.image('exitButton','./assets/menu/exitButton.png')
        this.load.image('gameButton','./assets/menu/gameButton.png')

        



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