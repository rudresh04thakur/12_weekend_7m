import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  /*
  value = {id:1,name:gopal,contact:123}
  k = id , name ,contact
  arr = [
    {key:id,value:1},
    {key:name,value:gopal},
    {key:contact,value:123}
  ]
  */

  hiddenRow = ['password', 'status']

  transform(value: any, args?: any): any {
    let arr = []
    for (let k in value) {
      if (!this.hiddenRow.includes(k.toLowerCase()))
        arr.push({ "key": k, "value": value[k] })
    }
    return arr;
  }

}
