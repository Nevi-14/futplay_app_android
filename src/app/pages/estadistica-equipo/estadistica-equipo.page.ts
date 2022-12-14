import { Component, OnInit, Input } from '@angular/core';
import { EquiposService } from 'src/app/services/equipos.service';
import { ModalController } from '@ionic/angular';
import { JugadoresService } from 'src/app/services/jugadores.service';


@Component({
  selector: 'app-estadistica-equipo',
  templateUrl: './estadistica-equipo.page.html',
  styleUrls: ['./estadistica-equipo.page.scss'],
})
export class EstadisticaEquipoPage implements OnInit {
@Input() equipo: any
estatura = 0;
peso = 0;
  constructor(
    public modalCtrl:ModalController,
public equiposService: EquiposService,
public jugadoresService:JugadoresService

  ) { }

  ngOnInit() {
console.log('equipo', this.equipo)
 this.jugadoresService.syncJugadoresEquipos(this.equipo.Cod_Equipo).then(jugadores =>{

  console.log('jugadores', jugadores)

  for (let i = 0 ; i < jugadores.length; i++){
    this.peso  += jugadores[i].usuario.Peso;
    this.estatura  +=  jugadores[i].usuario.Estatura;

    if(i == jugadores.length -1){
    

        this.peso = this.peso / jugadores.length
  this.estatura =  this.estatura  / jugadores.length;
    }
  }


});

  }
  
  cerrarModal(){
    this.modalCtrl.dismiss();
  }

  moda(array:any[], column){
    let moda=0;
    let Rep=0;
  
    for(let i=0;i<array.length-1;i++) {
      let cantRep=0;
     for(let j=0;j<array.length-1;i++) {
  
       if(array[i][column]==array[j][column])
  
       cantRep++;
  
       if(cantRep>Rep) moda=array[i][column];
       Rep=cantRep;
  
     }
    }
  
    return moda;
  }

}