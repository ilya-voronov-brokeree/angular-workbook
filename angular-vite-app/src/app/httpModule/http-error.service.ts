import { Injectable, signal } from '@angular/core';

export interface ErrorNotification {
  message: string;
  status: number;
  timestamp: Date;
}

@Injectable({ providedIn: 'root' })
export class HttpErrorService {
  readonly errors = signal<ErrorNotification[]>([]);

  handleError(message: string, status: number): void {
    const error: ErrorNotification = {
      message,
      status,
      timestamp: new Date()
    };

    this.errors.update(errors => [error, ...errors].slice(0, 10));

    console.error('HTTP Error handled:', error);
  }

  clearErrors(): void {
    this.errors.set([]);
  }

  removeError(index: number): void {
    this.errors.update(errors => errors.filter((_, i) => i !== index));
  }
}

