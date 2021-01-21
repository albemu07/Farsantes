export default class Boot extends Phaser.Scene{
  constructor(){
      super({key: 'Boot'})
      this.effectSound=100;
      this.musicSound=50;
  }

  preload(){
    //CARGA DE RECURSOS
    //Player
    this.load.spritesheet('IdleBuffoon','./assets/buffoon/idle.png',{frameWidth:64,frameHeight:64});
    this.load.spritesheet('RunBuffoon','./assets/buffoon/arlequin.png',{frameWidth:64,frameHeight:64});
    this.load.spritesheet('IdleCountess','./assets/countess/idle.png',{frameWidth:64,frameHeight:64});
    this.load.spritesheet('RunCountess','./assets/countess/markesa.png',{frameWidth:64,frameHeight:64});

    //Guardia
    this.load.spritesheet('runguard','./assets/guard/guard.png',{frameWidth:32,frameHeight:32});
    //Monja
    this.load.spritesheet('runmonk','./assets/nun/monk.png',{frameWidth:32,frameHeight:32});

    this.load.image('vista','./assets/spriteSheet/deteccion.png');

    //Anillos
    this.load.image('ring', '/assets/ring/ring.png');
    this.load.image('ringBC', '/assets/ring/ring_blue_close.png')
    this.load.image('ringB', '/assets/ring/ring_blue.png')
    this.load.image('ringGC', '/assets/ring/ring_green_close.png')
    this.load.image('ringG', '/assets/ring/ring_green.png')
    this.load.image('ringRC', '/assets/ring/ring_red_close.png')
    this.load.image('ringR', '/assets/ring/ring_red.png')
    this.load.image('ringYC', '/assets/ring/ring_yellow_close.png')
    this.load.image('ringY', '/assets/ring/ring_yellow.png')

    //Caja
    this.load.image('BoxSprite1', './assets/box/box1.png');
    this.load.image('BoxSprite0', './assets/box/box2.png');

    //Palanca
    this.load.spritesheet('LeverOpen1','./assets/lever/lever11.png',{frameWidth:32,frameHeight:32});
    this.load.spritesheet('LeverClose1','./assets/lever/lever21.png',{frameWidth:32,frameHeight:32});
    this.load.spritesheet('LeverOpen2','./assets/lever/lever12.png',{frameWidth:32,frameHeight:32});
    this.load.spritesheet('LeverClose2','./assets/lever/lever22.png',{frameWidth:32,frameHeight:32});
    this.load.spritesheet('LeverOpen3','./assets/lever/lever13.png',{frameWidth:32,frameHeight:32});
    this.load.spritesheet('LeverClose3','./assets/lever/lever23.png',{frameWidth:32,frameHeight:32});

    //Door
    this.load.spritesheet('DoorOpen1','./assets/door/open_door1.png',{frameWidth:38,frameHeight:38});        
    this.load.spritesheet('DoorClose1','./assets/door/close_door1.png',{frameWidth:38,frameHeight:38});
    this.load.spritesheet('DoorOpen2','./assets/door/open_door2.png',{frameWidth:38,frameHeight:38});        
    this.load.spritesheet('DoorClose2','./assets/door/close_door2.png',{frameWidth:38,frameHeight:38});
    this.load.spritesheet('DoorOpen3','./assets/door/open_door3.png',{frameWidth:38,frameHeight:38});        
    this.load.spritesheet('DoorClose3','./assets/door/close_door3.png',{frameWidth:38,frameHeight:38});

    //Niveles
    this.load.tilemapTiledJSON('tilemap', './assets/tile/nivelPrueba.json');
    this.load.tilemapTiledJSON('tilemap11', './assets/tile/zone1.json');
    this.load.tilemapTiledJSON('tilemap12', './assets/tile/zone2.json');
    this.load.tilemapTiledJSON('tilemap13', './assets/tile/zone3.json');
    this.load.tilemapTiledJSON('tilemap21', './assets/tile/zone21.json');
    this.load.tilemapTiledJSON('tilemap22', './assets/tile/zone22.json');
    this.load.tilemapTiledJSON('tilemap23', './assets/tile/zone23.json');

    this.load.tilemapTiledJSON('tilemap4', './assets/tile/pruebaGuardia.json');
    this.load.tilemapTiledJSON('tilemap31', './assets/tile/zone31.json');
    this.load.tilemapTiledJSON('tilemap32', './assets/tile/zone32.json');
    this.load.tilemapTiledJSON('tilemap33', './assets/tile/zone33.json');

    //Tilesets
    this.load.image('map1', './assets/tile/sprite_set.png');
    this.load.image('map2', './assets/tile/sprite_set_night.png');
    this.load.image('map3', './assets/tile/sprite_set_convento.png');

    //Placa de presión
    this.load.image('plateUnpressed1','./assets/presurePlate/plate_unpressed1.png');
    this.load.image('platePressed1','./assets/presurePlate/plate_pressed1.png');
    this.load.image('plateUnpressed2','./assets/presurePlate/plate_unpressed2.png');
    this.load.image('platePressed2','./assets/presurePlate/plate_pressed2.png');
    this.load.image('plateUnpressed3','./assets/presurePlate/plate_unpressed3.png');
    this.load.image('platePressed3','./assets/presurePlate/plate_pressed3.png');

    //Menú/interfaz
    this.load.image('menuBackground','./assets/menu/menu_background.png');
    this.load.image('settingsBackground','./assets/menu/settings_background.png');
    this.load.image('pauseBackground','./assets/menu/pause_background.png');
    this.load.image('playButton','./assets/menu/play_button.png');
    this.load.image('settingsButton','./assets/menu/settings_button.png');
    this.load.image('backButton','./assets/menu/back_button.png');
    this.load.image('exitButton','./assets/menu/exit_button.png');
    this.load.image('gameButton','./assets/menu/game_button.png');
    this.load.image('endTriggerText','/assets/menu/end_trigger_text.png');
    this.load.image('plusButton','/assets/menu/plus_button.png');
    this.load.image('minusButton','/assets/menu/less_button.png');

    //Assets de las escenas de texto
    this.load.image('textBackground','./assets/menu/text_background.png');
    this.load.image('text11','./assets/menu/text1.png');
    this.load.image('text12','./assets/menu/text3.png');
    this.load.image('text21','./assets/menu/text4.png');
    this.load.image('text22','./assets/menu/text5.png');
    this.load.image('text31','./assets/menu/text6.png');
    this.load.image('text32','./assets/menu/text7.png');
    this.load.image('text41','./assets/menu/text8.png');
    this.load.image('text42','./assets/menu/text9.png');
    this.load.image('continueButton','./assets/menu/continue_button.png');
    this.load.image('finalText1','./assets/menu/final_text1.png');
    this.load.image('finalText2','./assets/menu/final_text2.png');


    //Assests sonido
    this.load.audio('closeDoor', './assets/door/close_door_1.mp3');
    this.load.audio('openDoor', './assets/door/open_door_1.mp3');
    this.load.audio('gotRing', './assets/ring/ring.mp3');
    this.load.audio('levelPassed', './assets/extra/level_finish.mp3');
    this.load.audio('footstep', './assets/extra/foot_step.mp3');
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