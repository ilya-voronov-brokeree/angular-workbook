import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countPlural',
  standalone: false
})
export class CountPluralPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined || Number.isNaN(value)) return '';
    const n = Math.abs(value);

    if (n === 1) return 'штука';
    if (n === 2) return 'штук';
    if (n === 4) return 'штуки';
    return 'штук';
  }
}

