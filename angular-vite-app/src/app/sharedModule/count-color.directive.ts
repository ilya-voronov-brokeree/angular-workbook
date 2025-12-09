import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCountColor]',
  standalone: false
})
export class CountColorDirective implements OnChanges {
  @Input() appCountColor: number | null = null;

  @HostBinding('style.color')
  color = '';

  ngOnChanges(): void {
    const value = this.appCountColor;
    if (value === null || value === undefined || Number.isNaN(value)) {
      this.color = '';
      return;
    }

    if (value <= 2) {
      this.color = '#ef4444';
    } else if (value > 2 && value <= 4) {
      this.color = '#f97316';
    } else if (value > 4) {
      this.color = '#22c55e';
    } else {
      this.color = '';
    }
  }
}

