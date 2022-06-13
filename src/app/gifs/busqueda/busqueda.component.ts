import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

// ViewChild  se puede denominar como un querySelector
//indicas el nombre del elemento y haces referencia 
//se vuelve una variable en el ts 
//(!) indica que sera una negación del un valor null
  @ViewChild('txtBusqueda') txtBusqueda!:ElementRef<HTMLInputElement>
 // ElementRef acepta todo tipo de valores , por lo que se le tiene que indicar que valor debe de usar
 
 
 //mandamos a llamar nuestro servicio
  constructor(
   private gifsService:GifsService
  ){

  }

  busqueda(){
    const valor = this.txtBusqueda.nativeElement.value;
    
    if (valor.trim().length === 0) {
      return
    }
    this.gifsService.busquedaGifs(valor)
    
    this.txtBusqueda.nativeElement.value = ''
  }

}
