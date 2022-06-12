import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { RespuestaComponent } from './respuesta/respuesta.component';

@NgModule({
  declarations: [GifsPageComponent, BusquedaComponent, RespuestaComponent],
  imports: [CommonModule],
  exports: [GifsPageComponent],
})
export class GifsModule {}
