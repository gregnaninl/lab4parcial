import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPizza'
})
export class FiltroPizzaPipe implements PipeTransform {

  transform(value: any): any[] {
    if(value){
      // console.log(text);
      return value.filter(dato => {
            
       return dato.estado== true  ;
      });
     }
  }

}
