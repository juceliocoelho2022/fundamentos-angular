import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicarPor'
})
export class MultiplicarPorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
