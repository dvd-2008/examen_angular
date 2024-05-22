
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscadorZapatillas'
})
export class BuscadorZapatillasPipe implements PipeTransform {

  transform(value: any[], busqueda: string | number): any {
    let resultado: any[] = [];

    if (busqueda === '' || busqueda === null) {
      return value;
    }

    for (const zapatilla of value) {
      if (
        (typeof busqueda === 'string' &&
          (zapatilla.marca.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1)
        ) ||
        (typeof busqueda === 'number' && zapatilla.precio <= busqueda)
      ) {
        resultado.push(zapatilla);
      }
    }

    return resultado;

  }
}
