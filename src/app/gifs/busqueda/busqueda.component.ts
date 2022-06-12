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
//(!) indica que sera una negación del un valor null
  @ViewChild('txtBusqueda') txtBusqueda!:ElementRef<HTMLInputElement>
 // ElementRef acepta todo tipo de valores , por lo que se le tiene que indicar que valor debe de usar


  busqueda(){
    const valor = this.txtBusqueda.nativeElement.value;
    console.log('//'+ valor );
    this.txtBusqueda.nativeElement.value = ''
  }

}
