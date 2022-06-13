import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../Interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  //iniciamos un array de strings de tipo vacio

  private apiKey: string = 'g9rGUa5syqQAalBlMEYq4r9jHPYy7PNo';
  private urlBase: string = 'https://api.giphy.com/v1/gifs'

   
  private _historial: string[] = [];
// TODO: Cambiar any por su tipo correspondiente 
  public resultados: Gif[] = [];

  //optenemos el historial

  get historial() {
    //retornamos la cadena rompiendo la anterior y creando una nueva

    return [...this._historial];
  }


  constructor(private http: HttpClient) {
    // mantener contenido en el local storage , con recargas

    this._historial = JSON.parse(localStorage.getItem('historial')!)||[];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!)||[];
  }

  
  //metodo busqueda con argumento (query)
  busquedaGifs(query: string = '') {
    //hacemos una insercion a nuestro array
    // usamos unshift para insertar al inicio
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10);

      localStorage.setItem('historial',JSON.stringify(this._historial))
    }

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10')
    .set('q',query)

    this.http
    .get<SearchGifsResponse>(
      `${this.urlBase}/search`,{params}
    )
    .subscribe((resp: any) => {
      console.log(resp.data);

      this.resultados = resp.data;
      // mostrar contenido del localstorage
      localStorage.setItem('resultados',JSON.stringify(this.resultados))
    });
  }
}
