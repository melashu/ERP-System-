import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {


  transform(amount: number, from: string, to: string): number {
    if (from == 'birr' && to == '$') {
      return amount / 50;
    } else {
      return amount * 50;

    }
  }

}
