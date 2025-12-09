import { Injectable } from '@angular/core';
import { Resolution } from '../commonModule/resolution.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedResolutionService implements Resolution {
  getValue(): string {
    return 'SharedModule resolution';
  }
}

