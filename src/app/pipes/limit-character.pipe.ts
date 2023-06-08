import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacter'
})
export class LimitCharacterPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 100) {
      return value.substring(0, 100) + '...';
    }
    return value;
  }
}