import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../course';

@Pipe({
  name: 'filterarray',
  pure : false
})
export class FilterarrayPipe implements PipeTransform {

  transform(value: Course [], fil: String): any {
    return value.filter((curr) => {
      if ( curr.name.toLowerCase().startsWith( fil.toLowerCase() ) ) {
        return curr;
      }
    });
  }

}
