import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicData'
})
export class DynamicDataPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let arr: any = [];
      for (const iter of Object.values(value)) {
        arr.push(iter);
       
      }
    return arr;
  }

}
