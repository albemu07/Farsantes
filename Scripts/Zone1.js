import Game from '../game.js'
import Guardia from './guardia.js';
import Monje from './monje.js';
export default class Zone1 extends Game {
  constructor() {
    super('Zone1','Zone2',380,32,432,32, 'tilemap');
  }
  create(){
    super.create();
    this.add.text(20,20,"Esta es la zona 1, entra en el recuadro con ambos personajes para pasar de zona");

        this.vigGuard = this.physics.add.group();
        this.vigGuard.add(new Guardia(this,400,100, 400,350, false,true,'guardiaL'));
        this.vigGuard.add(new Guardia(this,350,50, 700,50, true,true,'guardiaR'));
        this.vigNun = this.physics.add.group();
        this.vigNun.add(new Monje(this,150,50, 150,500, false,false,'monjeL'));
        this.vigNun.add(new Monje(this,200,450, 500,450, true,false,'monjeR'));

        this.physics.add.overlap(this.playerBuffoon,this.vigGuard,(o1,o2)=>{this.arlVig(o1,o2);});
        this.physics.add.overlap(this.playerBuffoon,this.vigNun,(o1,o2)=>{this.arlVig(o1,o2);});
        this.physics.add.overlap(this.playerCountess,this.vigGuard,(o1,o2)=>{this.marGuardia(o1,o2);});
        this.physics.add.overlap(this.playerCountess,this.vigNun,(o1,o2)=>{this.marMonje(o1,o2)});
        

    }
    
}