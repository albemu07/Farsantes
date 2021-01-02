import Buffoon from './scripts/buffoon.js';
import Countess from './scripts/countess.js';
import Lever from './scripts/lever.js';
import Ring from './scripts/ring.js';
import Caja from './scripts/caja.js';
import Door from './scripts/door.js';
import PressurePlate from './scripts/pressurePlate.js'
import Objecto from './scripts/objeto.js';
import Guardia from './scripts/guardia.js';
import Monje from './scripts/monje.js';


export default class Game extends Phaser.Scene {
  constructor(zone,nextZone,countessPositionX,countessPositionY,buffoonPositionX,buffoonPositionY, tileMap) {
    super({ key: zone });
    this.zone=zone;
    this.nextZone=nextZone;
    this.countessX=countessPositionX;
    this.countessY=countessPositionY;
    this.buffoonX=buffoonPositionX;
    this.buffoonY=buffoonPositionY;
    this.tileMap = tileMap;
  }


  preload() {

  }

  create() {

    //mapa
    this.map = this.make.tilemap({
      key: this.tileMap
    });

    const tileset = this.map.addTilesetImage('spriteSetBien', 'map');

    //Crear capa de suelo
    this.ground = this.map.createStaticLayer('ground', tileset);
    //Crear capa de barro
    this.mud = this.map.createStaticLayer('mud', tileset);
    //Crear capa de paredes
    this.walls = this.map.createStaticLayer('walls', tileset);
    
    //Crear trigger de siguiente zona
    this.triggerLayer=this.map.getObjectLayer('endTrigger')['objects']
    this.triggerLayer.forEach(object =>{
      this.endTrigger=this.add.zone(object.x,object.y).setOrigin(0,0)
      this.endTrigger.setSize(object.width,object.height)  
    })
    this.physics.world.enable(this.endTrigger)

    //Crear capa de puertas de placas
    this.plateDoorsLayer=this.map.getObjectLayer('plateDoors')['objects'] //Creación de capa de puertas asociadas a placas
    this.plateDoorsGroup=this.physics.add.staticGroup();                  //Creación del grupo de puertas asociadas a placas
    this.plateDoorsLayer.forEach(object =>{                               
      this.plateDoorsGroup.add(new Door(this,object.x,object.y,object.rotation,false))    //Por cada objeto dentro de la capa se crea una puerta en el grupo.
    })
    //Crear capa de placas
    this.platesLayer=this.map.getObjectLayer('plates')['objects']         //Creación de capa de placas
    this.platesGroup=this.physics.add.staticGroup();                      //Creación del grupo de placas
    this.platesLayer.forEach(object =>{                                   //Por cada objeto dentro de la capa se crea una placa en el grupo. La puerta asociada es la puerta del grupo anterior con el mismo nombre.
      this.platesGroup.add(new PressurePlate(this,object.x,object.y,this.plateDoorsGroup.getChildren()[object.name],false))
    })

    //Crear capa de puertas de palancas
    this.leverDoorsLayer=this.map.getObjectLayer('leverDoors')['objects'] //Creación de capa de puertas asociadas a palancas
    this.leverDoorsGroup=this.physics.add.staticGroup();                  //Creación del grupo de puertas asociadas a palancas
    this.leverDoorsLayer.forEach(object =>{                              
       this.leverDoorsGroup.add(new Door(this,object.x,object.y,object.rotation,false))    //Por cada objeto dentro de la capa se crea una puerta en el grupo.
    })
    //Crear capa de palancas
    this.leversLayer=this.map.getObjectLayer('levers')['objects']         //Creación de capa de palancas
    this.leversGroup=this.physics.add.staticGroup();                      //Creación del grupo de palancas
    this.leversLayer.forEach(object =>{                                   //Por cada objeto dentro de la capa se crea una palcan en el grupo. La puerta asociada es la puerta del grupo anterior con el mismo nombre.
       this.leversGroup.add(new Lever(this,object.x,object.y,this.leverDoorsGroup.getChildren()[object.name],false))
    })

    //Crear capa de cajas
    this.boxesLayer=this.map.getObjectLayer('boxes')['objects']           //Creación de capa de cajas
    this.boxesGroup=this.physics.add.group();                             //Creación del grupo de cajas
    this.boxesLayer.forEach(object =>{                                    
      this.boxesGroup.add(new Caja(this,object.x,object.y,'BoxSprite'));  //Por cada objeto dentro de la capa se crea una caja en el grupo.
    })

    //Crear capa de coleccionables
    this.ringsLayer=this.map.getObjectLayer('rings')['objects']           //Creación de capa de coleccionables
    this.ringsGroup=this.physics.add.staticGroup();                       //Creación del grupo de coleccionables
    this.ringsLayer.forEach(object =>{                                    
      this.ringsGroup.add(new Ring (this,object.x,object.y,'ringRC','ringR',object.value,0));  //Por cada objeto dentro de la capa se crea un anillo en el grupo.
    })

    //Crear capa de guardias
    this.guardsLayer=this.map.getObjectLayer('guards')['objects']         //Creación de capa de guardias
    this.guardsGroup=this.physics.add.group();                            //Creación del grupo de guardias
    this.guardsLayer.forEach(object =>{                                    
      this.guardsGroup.add(new Guardia(this,object.route,object.circle,'guardiaF'));  //Por cada objeto dentro de la capa se crea un guardia en el grupo.
    })
 
    //Crear capa de monjas
    this.monksLayer=this.map.getObjectLayer('monks')['objects']           //Creación de capa de monjas
    this.monksGroup=this.physics.add.group();                            //Creación del grupo de monjas
    this.monksLayer.forEach(object =>{                                    
      this.monksGroup.add(new Guardia(this,object.route,object.circle,'guardiaF'));  //Por cada objeto dentro de la capa se crea una monja en el grupo.
    })

    //Creación de los jugadores
    this.playerBuffoon=new Buffoon(this,this.buffoonX,this.buffoonY,'IdleBuffoon');
    this.playerCountess=new Countess(this,this.countessX,this.countessY,'IdleCountess');

    //COLISIONES
    //Jugadores con los muros
    this.physics.add.collider(this.playerBuffoon, this.walls);
    this.physics.add.collider(this.playerCountess, this.walls);

    //Jugadores con las puertas (de placas y palancas)
    for(var i=0;i<this.plateDoorsGroup.getChildren().length;i++){
        this.physics.add.collider(this.playerBuffoon,this.plateDoorsGroup.getChildren()[i])
        this.physics.add.collider(this.playerCountess,this.plateDoorsGroup.getChildren()[i])
    }
    for(var i=0;i<this.leverDoorsGroup.getChildren().length;i++){
      this.physics.add.collider(this.playerBuffoon,this.leverDoorsGroup.getChildren()[i])
      this.physics.add.collider(this.playerCountess,this.leverDoorsGroup.getChildren()[i])
    }

    //Jugadores con las palancas
    for(var i=0;i<this.leversGroup.getChildren().length;i++){
      this.physics.add.overlap(this.playerBuffoon, this.leversGroup.getChildren()[i], (o1, o2) => {
        o2.interaction();});
      this.physics.add.overlap(this.playerCountess, this.leversGroup.getChildren()[i], (o1, o2) => {
         o2.interaction();});
    }

    //Cajas con jugadores, muros y puertas
    for(var i=0;i<this.boxesGroup.getChildren().length;i++){
      let caja=this.boxesGroup.getChildren()[i]
      //Muros
      this.physics.add.collider(this.walls,caja)
      //Bufon
      this.physics.add.collider(this.playerBuffoon,caja.box)
      this.physics.add.overlap(this.playerBuffoon, caja.object, (o1, o2) => {
        this.moveBox(o1,caja);    
       });
      //Condesa
      this.physics.add.collider(this.playerCountess,caja.box)
       this.physics.add.overlap(this.playerCountess, caja.object, (o1,o2) => {
        this.moveBox(o1,caja);   
       });

      //Puertas
      for(var j=0;j<this.plateDoorsGroup.getChildren().length;j++){
        this.physics.add.collider(caja,this.plateDoorsGroup.getChildren()[j])
      }
      for(var j=0;j<this.leverDoorsGroup.getChildren().length;j++){
        this.physics.add.collider(caja,this.leversDoorsGroup.getChildren()[j])
      }
              
    }

    //Jugadores con coleccionables
    for(var i=0;i<this.ringsGroup.getChildren().length;i++){
      this.physics.add.overlap(this.playerBuffoon, this.ringsGroup.getChildren()[i], (o1, o2) => {this.takeRing(o1,o2); });
    }


    //Jugadores con los guardias

    this.score = 0;     

    //SetCollisionBetween
    this.map.setCollisionBetween(46, 999);


    this.route1 =new Array (new Array(300,150),new Array(470,150),new Array(470,310),new Array(300,310));
    this.route2 =new Array (new Array(140,80),new Array(140,150),new Array(80,150),new Array(210,150));
    this.vigGuard = this.physics.add.group();
    this.vigGuard.add(new Guardia(this,true,this.route1,true,'guardiaF'));
    this.vigGuard.add(new Guardia(this,true,this.route2,false,'guardiaR'));
    this.vigNun = this.physics.add.group();

    //Texto encima del trigger
    this.endTriggerText=this.add.text(650,150,'POR AQUÍ');

    //Gamepad
    this.gamepad;
    this.input.gamepad.once('down', function (pad, button, index) {
        this.gamepad = pad;
    }, this);

      //barro temporal
      this.physics.add.collider(this.playerCountess, this.muudtemp);

    this.physics.add.overlap(this.playerBuffoon,this.vigGuard,(o1,o2)=>{this.arlVig(o1,o2);});
    this.physics.add.overlap(this.playerBuffoon,this.vigNun,(o1,o2)=>{this.arlVig(o1,o2);});
    this.physics.add.overlap(this.playerCountess,this.vigGuard,(o1,o2)=>{this.marGuardia(o1,o2);});
    this.physics.add.overlap(this.playerCountess,this.vigNun,(o1,o2)=>{this.marMonje(o1,o2)});

    //Tecla de menú de pausa
    this.input.keyboard.on('keydown_ESC', ()=> {this.scene.launch('pauseMenu',{zone: this.zone}); this.scene.sleep()},this);
  }

  preUpdate(time,delta){
  }

  update(time,delta){
    //Comprobación del overlapping entre trigger y jugadores
    if ( this.gamepad){
      this.playerBuffoon.setGamePad(this.gamepad);
    }
    this.checkPressureplate();
    this.checkEndOverlap();
    this.checkBoxes();
  }

  takeRing(o1,o2)
  {
    if (this.physics.overlap(o1,o2.ring)){
      console.log("anillo cogido");
      this.score += o2.taken();
      o2.destroy();
    }
    else
    {
      o2.animate();
    }

  }
  marGuardia(o1,o2)
  {
    if (o1.stunDown())
    {
      console.log("Distrayendo guardia");
      o2.distraida =true;
      o2.setText();
    }
  }

  marMonje(o1,o2)
  {
    if (this.physics.overlap(o1,o2.vision))
    {
      console.log("Encontrado a la Marquesa");
      this.playerCountess.respawn();
      this.playerBuffoon.respawn();
    }

  }
  arlVig(o1,o2)
  {
    if (this.physics.overlap(o1,o2.vision)){
    console.log("Encontrado a Arlequin");
    this.playerCountess.respawn();
    this.playerBuffoon.respawn();
    }
  }

  moveBox(player,box){
    if (player.grabDown()){
      player.speedChange(box.moveAlong(player))
    }
    else {
      player.speedChange(box.stopMove());
    }
  }

  checkEndOverlap(){
    //Si ambos jugadores entran en el trigger, se pasa de escena
      if(this.physics.overlap(this.playerBuffoon, this.endTrigger) && this.physics.overlap(this.playerCountess, this.endTrigger)){
        console.log('Siguiente escena');
        this.scene.start(this.nextZone);
      }
   //Si solo uno de ellos entra, "llama" al otro haciendo visible un texto
      else if(this.physics.overlap(this.playerBuffoon, this.endTrigger) || this.physics.overlap(this.playerCountess, this.endTrigger)){
         console.log('Un jugador colisionando');
         this.endTriggerText.visible=true;
      }
   //Si no hay ninguno dentro, simplemente el texto se oculta
     else{
        this.endTriggerText.visible=false;
      }
    }

  //Comprueba las colisiones entre jguadores y placa de presión. Si colisionan, cambia el "on" de la placa de presión a true; en el caso contrario, a false. Luego llama al método de interacción de la placa.
  checkPressureplate(){
    var num=this.platesGroup.getChildren().length
    for(var i=0;i<num;i++){
      if (this.physics.overlap(this.playerBuffoon, this.platesGroup.getChildren()[i]) ||this.physics.overlap(this.playerCountess, this.platesGroup.getChildren()[i]) || this.physics.overlap(this.boxesGroup, this.platesGroup.getChildren()[i])){
        this.platesGroup.getChildren()[i].active=true;
      }
      else{
        this.platesGroup.getChildren()[i].active=false;
      }
      this.platesGroup.getChildren()[i].platePressed();
    }
  }

  //Si la caja no está colisionando con ningún jugador, deja de moverse
  checkBoxes(){
    for(var i=0; i<this.boxesGroup.getChildren().length;i++){
      let caja=this.boxesGroup.getChildren()[i]

      if(!this.physics.overlap(this.playerBuffoon, caja.object) && !this.physics.overlap(this.playerCountess, caja.object))
      caja.stopMove();

    }
  }
}
