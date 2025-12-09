import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, delay, of, throwError } from 'rxjs';
import { HttpData, PaginatedResponse } from './http-data.model';

const FAKE_DATA: HttpData[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  description: `Description for user ${i + 1}`
}));

const LOADING_DELAY_MS = 500;

@Injectable({ providedIn: 'root' })
export class HttpDataService {
  private requestCount = 0;

  getData(page: number = 1, pageSize: number = 10, search: string = ''): Observable<PaginatedResponse<HttpData>> {
    this.requestCount++;

    if (this.requestCount % 3 === 0) {
      const error = new HttpErrorResponse({
        error: { message: 'Server error: Unable to fetch data' },
        status: 500,
        statusText: 'Internal Server Error'
      });
      return throwError(() => error).pipe(delay(LOADING_DELAY_MS));
    }

    let filteredData = [...FAKE_DATA];

    if (search.trim()) {
      const searchLower = search.toLowerCase();
      filteredData = filteredData.filter(
        item =>
          item.name.toLowerCase().includes(searchLower) ||
          item.email.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower)
      );
    }

    const total = filteredData.length;
    const totalPages = Math.ceil(total / pageSize);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedData = filteredData.slice(start, end);

    const response: PaginatedResponse<HttpData> = {
      data: paginatedData,
      total,
      page,
      pageSize,
      totalPages
    };

    return of(response).pipe(delay(LOADING_DELAY_MS));
  }
}

