import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HttpErrorService } from './http-error.service';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(HttpErrorService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An unknown error occurred';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Client Error: ${error.error.message}`;
      } else {
        switch (error.status) {
          case 400:
            errorMessage = error.error?.message || 'Bad Request';
            break;
          case 401:
            errorMessage = error.error?.message || 'Unauthorized';
            break;
          case 403:
            errorMessage = error.error?.message || 'Forbidden';
            break;
          case 404:
            errorMessage = error.error?.message || 'Resource Not Found';
            break;
          case 500:
            errorMessage = error.error?.message || 'Internal Server Error';
            break;
          case 503:
            errorMessage = error.error?.message || 'Service Unavailable';
            break;
          default:
            errorMessage = error.error?.message || error.message || `Error Code: ${error.status}`;
        }
      }

      errorService.handleError(errorMessage, error.status);

      console.error('HTTP Error:', {
        url: req.url,
        status: error.status,
        message: errorMessage,
        error: error.error
      });

      return throwError(() => error);
    })
  );
};

