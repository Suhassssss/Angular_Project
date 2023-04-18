import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let arr=[];
    for (let iterator of value) {
      if (iterator.sourceNE.includes(args[0]) || iterator.securityName.toString().includes(args[0]) || iterator.securityModel.toString().includes(args[0]) ||
      iterator.securityLevel.toString().includes(args[0]) || iterator.eventID.toString().includes(args[0]) ||
      iterator.notifTime.toString().includes(args[0]) || iterator.emsName.toString().includes(args[0]) ||
      iterator.emsType.toString().includes(args[0]) || iterator.neType.toString().includes(args[0]) ||
      iterator.objectType.toString().includes(args[0]) ||
      iterator.eventType.toString().includes(args[0]) || iterator.message.toString().includes(args[0])) {
          arr.push(iterator);
      }
    }
    if(args[1] == true){
      return arr.reverse();
    }else{return arr}
  }

}











