import { Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { toObservable } from '@angular/core/rxjs-interop';
import { combineLatest, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, startWith, catchError, map } from 'rxjs';
import { HttpDataService } from '../../../httpModule/http-data.service';
import { HttpData, PaginatedResponse } from '../../../httpModule/http-data.model';

interface ClientResponse {
  loading: boolean;
  data: HttpData[];
  total: number;
  totalPages: number;
  error: string | null;
}

@Component({
  selector: 'app-client-page',
  standalone: false,
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss']
})
export class ClientPageComponent {
  private readonly httpDataService = inject(HttpDataService);

  readonly page = signal(1);
  readonly pageSize = signal(10);
  readonly search = signal('');

  readonly data$ = combineLatest([
    toObservable(this.page),
    toObservable(this.pageSize),
    toObservable(this.search).pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
  ]).pipe(
    switchMap(([page, pageSize, search]) => {
      return this.httpDataService.getData(page, pageSize, search).pipe(
        map((response: PaginatedResponse<HttpData>): ClientResponse => ({
          loading: false,
          data: response.data,
          total: response.total,
          totalPages: response.totalPages,
          error: null
        })),
        startWith({ loading: true, data: [], total: 0, totalPages: 0, error: null } as ClientResponse),
        catchError((error: HttpErrorResponse) => {
          const errorMessage = error.error?.message || error.message || 'An error occurred while fetching data';
          return of({
            loading: false,
            data: [],
            total: 0,
            totalPages: 0,
            error: errorMessage
          } as ClientResponse);
        })
      );
    })
  );

  onPageChange(newPage: number): void {
    this.page.set(newPage);
  }

  onSearchChange(searchValue: string): void {
    this.search.set(searchValue);
    this.page.set(1);
  }
}

