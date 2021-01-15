export default class Boot extends Phaser.Scene{
  constructor(){
      super({key: 'Boot'})
      this.effectSound=100;
      this.musicSound=20;
  }

  preload(){
    //CARGA DE RECURSOS
    //Player
    this.load.spritesheet('IdleBuffoon','./assets/buffoon/idle.png',{frameWidth:64,frameHeight:64});
    this.load.spritesheet('RB','./assets/buffoon/run.png',{frameWidth:150,frameHeight:150});
    this.load.spritesheet('RunBuffoon','./assets/buffoon/arlequin.png',{frameWidth:64,frameHeight:64});
    this.load.spritesheet('IdleCountess','./assets/countess/idle.png',{frameWidth:64,frameHeight:64});
    this.load.spritesheet('RC','./assets/countess/run.png',{frameWidth:320,frameHeight:320});
    this.load.spritesheet('RunCountess','./assets/countess/markesa.png',{frameWidth:64,frameHeight:64});

    //Guardia
    // this.load.image('guardiaL','./assets/guard/guardiaLeft.png');
    // this.load.image('guardiaR','./assets/guard/guardiaRight.png');
    // this.load.image('guardiaF','./assets/guard/guardiaFront.png');
    // this.load.image('guardiaB','./assets/guard/guardiaBack.png');
    this.load.spritesheet('runguard','./assets/guard/guard.png',{frameWidth:32,frameHeight:32});
    //Monja
    // this.load.image('monjeL','./assets/nun/monjeLeft.png');
    // this.load.image('monjeR','./assets/nun/monjeRight.png');
    // this.load.image('monjeF','./assets/nun/monjeFront.png');
    // this.load.image('monjeB','./assets/nun/monjeBack.png');
    this.load.spritesheet('runmonk','./assets/nun/monk.png',{frameWidth:32,frameHeight:32});

    this.load.image('vista','./assets/spriteSheet/deteccion.png');

    //Anillos
    this.load.image('ring', '/assets/ring/ring.png');
    this.load.image('ringBC', '/assets/ring/ringBlueClose.png')
    this.load.image('ringB', '/assets/ring/ringBlue.png')
    this.load.image('ringGC', '/assets/ring/ringGreenClose.png')
    this.load.image('ringG', '/assets/ring/ringGreen.png')
    this.load.image('ringRC', '/assets/ring/ringRedClose.png')
    this.load.image('ringR', '/assets/ring/ringRed.png')
    this.load.image('ringYC', '/assets/ring/ringYellowClose.png')
    this.load.image('ringY', '/assets/ring/ringYellow.png')

    //Caja
    this.load.image('BoxSprite1', './assets/box/box1.png');
    this.load.image('BoxSprite0', './assets/box/box2.png');
    //this.load.image('BoxSprite1', './assets/box/box1.png');

    //this.load.image('Trigger','./assets/mechanisms/nextZoneTrigger.png');

    //Palanca
    this.load.spritesheet('LeverOpen1','./assets/lever/lever11.png',{frameWidth:32,frameHeight:32});
    this.load.spritesheet('LeverClose1','./assets/lever/lever21.png',{frameWidth:32,frameHeight:32});
    this.load.spritesheet('LeverOpen2','./assets/lever/lever12.png',{frameWidth:32,frameHeight:32});
    this.load.spritesheet('LeverClose2','./assets/lever/lever22.png',{frameWidth:32,frameHeight:32});
    this.load.spritesheet('LeverOpen3','./assets/lever/lever13.png',{frameWidth:32,frameHeight:32});
    this.load.spritesheet('LeverClose3','./assets/lever/lever23.png',{frameWidth:32,frameHeight:32});

    //Door
    this.load.spritesheet('DoorOpen1','./assets/door/openDoor1.png',{frameWidth:38,frameHeight:38});        
    this.load.spritesheet('DoorClose1','./assets/door/closeDoor1.png',{frameWidth:38,frameHeight:38});
    this.load.spritesheet('DoorOpen2','./assets/door/openDoor2.png',{frameWidth:38,frameHeight:38});        
    this.load.spritesheet('DoorClose2','./assets/door/closeDoor2.png',{frameWidth:38,frameHeight:38});
    this.load.spritesheet('DoorOpen3','./assets/door/openDoor3.png',{frameWidth:38,frameHeight:38});        
    this.load.spritesheet('DoorClose3','./assets/door/closeDoor3.png',{frameWidth:38,frameHeight:38});

    //Niveles
    this.load.tilemapTiledJSON('tilemap', './assets/tile/nivelPrueba.json');
    this.load.tilemapTiledJSON('tilemap11', './assets/tile/zone1.json');
    this.load.tilemapTiledJSON('tilemap12', './assets/tile/zone2.json');
    this.load.tilemapTiledJSON('tilemap13', './assets/tile/zone3.json');
    this.load.tilemapTiledJSON('tilemap4', './assets/tile/pruebaGuardia.json');
    this.load.tilemapTiledJSON('tilemap31', './assets/tile/zone31.json');

    //Tilesets
    this.load.image('map1', './assets/tile/spriteSet.png');
    this.load.image('map2', './assets/tile/spriteSetNight.png');
    this.load.image('map3', './assets/tile/spriteSetConvento.png');

    //Placa de presión
    this.load.image('plateUnpressed1','./assets/presurePlate/plateUnpressed1.png');
    this.load.image('platePressed1','./assets/presurePlate/platePressed1.png');
    this.load.image('plateUnpressed2','./assets/presurePlate/plateUnpressed2.png');
    this.load.image('platePressed2','./assets/presurePlate/platePressed2.png');
    this.load.image('plateUnpressed3','./assets/presurePlate/plateUnpressed3.png');
    this.load.image('platePressed3','./assets/presurePlate/platePressed3.png');

    //Menú/interfaz
    this.load.image('menuBackground','./assets/menu/menuBackground.png');
    this.load.image('settingsBackground','./assets/menu/settingsBackground.png');
    this.load.image('pauseBackground','./assets/menu/pauseBackground.png');
    this.load.image('playButton','./assets/menu/playButton.png');
    this.load.image('settingsButton','./assets/menu/settingsButton.png');
    this.load.image('backButton','./assets/menu/backButton.png');
    this.load.image('exitButton','./assets/menu/exitButton.png');
    this.load.image('gameButton','./assets/menu/gameButton.png');
    this.load.image('endTriggerText','/assets/menu/endTriggerText.png');
    this.load.image('plusButton','/assets/menu/plusButton.png');
    this.load.image('minusButton','/assets/menu/lessButton.png');

    //Assets de las escenas de texto
    this.load.image('textBackground','./assets/menu/textBackground.png');
    this.load.image('text11','./assets/menu/text1.png');
    this.load.image('text12','./assets/menu/text2.png');
    this.load.image('continueButton','./assets/menu/continueButton.png');

    //Assests sonido
    this.load.audio('closeDoor', './assets/door/close_door_1.mp3');
    this.load.audio('openDoor', './assets/door/open_door_1.mp3');
    this.load.audio('gotRing', './assets/ring/ring.mp3');
    this.load.audio('levelPassed', './assets/extra/levelFinish.mp3');
    this.load.audio('footstep', './assets/extra/footStep.mp3');
    this.load.audio('mudstep', './assets/mud/mudFootStep.mp3');
    this.load.audio('music', './assets/extra/music.mp3');

    //Al cargar todos los recursos, se inicia la escena Menú
    this.load.on('complete', function(){
        console.log('Preload complete');
        this.scene.start('Menu', {effSound:this.effectSound, mSound:this.musicSound});
    },this);
  }


  create(){   
    //ANIMACIONES     
    //Personajes
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
      frameRate:4,
      repeat: -1
    }); 
    
    this.anims.create({
      key:'RunCountessAnim',
      frames: this.anims.generateFrameNumbers('RunCountess'),
      frameRate:6,
      repeat: -1
    });

    this.anims.create({
      key:'GuardAnim',
      frames: this.anims.generateFrameNumbers('runguard'),
      frameRate:3,
      repeat: -1
    })
    this.anims.create({
      key:'MonkAnim',
      frames: this.anims.generateFrameNumbers('runmonk'),
      frameRate:3,
      repeat: -1
    })
    //Palanca
    this.anims.create({
      key:'DesactivateLever1',
      frames: this.anims.generateFrameNumbers('LeverOpen1'),
      frameRate:6,
      repeat: 0
    });

    this.anims.create({
      key:'ActivateLever1',
      frames: this.anims.generateFrameNumbers('LeverClose1'),
      frameRate:6,
      repeat: 0
    });

    this.anims.create({
      key:'DesactivateLever2',
      frames: this.anims.generateFrameNumbers('LeverOpen2'),
      frameRate:6,
      repeat: 0
    });

    this.anims.create({
      key:'ActivateLever2',
      frames: this.anims.generateFrameNumbers('LeverClose2'),
      frameRate:6,
      repeat: 0
    });
        
    this.anims.create({
      key:'DesactivateLever3',
      frames: this.anims.generateFrameNumbers('LeverOpen3'),
      frameRate:6,
      repeat: 0
    });
          
    this.anims.create({
      key:'ActivateLever3',
      frames: this.anims.generateFrameNumbers('LeverClose3'),
      frameRate:6,
      repeat: 0
    });

    //Puerta
    this.anims.create({
      key:'OpenDoor1',
      frames: this.anims.generateFrameNumbers('DoorOpen1'),
      frameRate:7,
      repeat: 0
    });

    this.anims.create({
      key:'CloseDoor1',
      frames: this.anims.generateFrameNumbers('DoorClose1'),
      frameRate:7,
      repeat: 0
    });   
    
    this.anims.create({
      key:'OpenDoor2',
      frames: this.anims.generateFrameNumbers('DoorOpen2'),
      frameRate:7,
      repeat: 0
    });

    this.anims.create({
      key:'CloseDoor2',
      frames: this.anims.generateFrameNumbers('DoorClose2'),
      frameRate:7,
      repeat: 0
    }); 

    this.anims.create({
      key:'OpenDoor3',
      frames: this.anims.generateFrameNumbers('DoorOpen3'),
      frameRate:7,
      repeat: 0
    });

    this.anims.create({
      key:'CloseDoor3',
      frames: this.anims.generateFrameNumbers('DoorClose3'),
      frameRate:7,
      repeat: 0
    }); 
  }
}