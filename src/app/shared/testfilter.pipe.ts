import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testfilter'
})
export class TestfilterPipe implements PipeTransform {

  transform(value: String, args?: any): any {
    return value.toUpperCase();
  }

}
