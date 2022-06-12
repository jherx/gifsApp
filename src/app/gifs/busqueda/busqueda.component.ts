import { Component, ElementRef, ViewChild } from '@angular/core';

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
//! indica que sera una negacion 
  @ViewChild('txtBusqueda') txtBusqueda!:ElementRef
 
  busqueda(){
    const valor = this.txtBusqueda.nativeElement.value;
    console.log('//'+ valor );
    
  }

}
