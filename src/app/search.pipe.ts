import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any,args: any): any {
    // console.log("args"+args);
    // console.log("value"+value);

    if(args==null){
     return value;
    }else{
    return value.filter(function(item){
      return JSON.stringify(item).includes(args);
  });
}
  }

}
