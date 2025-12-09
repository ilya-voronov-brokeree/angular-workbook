import { Injectable } from '@angular/core';
import { Resolution } from '../commonModule/resolution.interface';

@Injectable({
  providedIn: 'any'
})
export class TodoResolutionService implements Resolution {
  getValue(): string {
    return 'ToDo module overriden dependency';
  }
}

