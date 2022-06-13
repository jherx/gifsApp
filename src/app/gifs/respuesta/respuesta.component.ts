import { Component,  } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styles: [
  ]
})
export class RespuestaComponent  {

get resultados(){
  return this.gifsService.resultados
}

  constructor( private gifsService:GifsService) { }

}
