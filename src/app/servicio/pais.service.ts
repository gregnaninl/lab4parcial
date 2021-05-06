import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private paisActual : string;

  constructor(private http : HttpClient) { }


  public getTodosLosPaises(){
  //  return this.http.get('https://restcountries.eu/rest/v2/all');
   return this.http.get('https://restcountries.eu/rest/v2/name/united');
  }

  public taerPaisActor(pais:string){
    return this.http.get('https://restcountries.eu/rest/v2/name/'+pais);
  }
}
