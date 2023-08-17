import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(public http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, { headers: this.getHttpHeaders() });
  }

  post<T>(url: string, body: unknown): Observable<T> {
    return this.http.post<T>(url, body, { headers: this.getHttpHeaders() });
  }

  put<T>(url: string, body: unknown): Observable<T> {
    return this.http.put<T>(url, body, { headers: this.getHttpHeaders() });
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url, { headers: this.getHttpHeaders() });
  }

  private getHttpHeaders(): HttpHeaders {
    return new HttpHeaders().set('Content-type', 'application/json');
  }
}
