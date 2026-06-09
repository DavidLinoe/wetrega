import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '@shared/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl: string = environment.apiUrl;

  private buildQueryParams(filters?: Record<string, any>): HttpParams {
    let params = new HttpParams();
    if (!filters) return params;

    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          params = params.append(key, v);
        });
      } else if (value !== null && value !== undefined) {
        params = params.set(key, value);
      }
    });

    return params;
  }

  async get<T>(url: string, filters?: Record<string, any>): Promise<T | null> {
    try {
      const params = this.buildQueryParams(filters);
      return await firstValueFrom(this.httpClient.get<T>(this.baseUrl + url, { params }));
    } catch (error) {
      console.error(`HttpService GET ${url} failed`, error);
      return null;
    }
  }

  async post<T>(url: string, body: any): Promise<T | null> {
    try {
      return await firstValueFrom(this.httpClient.post<T>(this.baseUrl + url, body));
    } catch (error) {
      console.error(`HttpService POST ${url} failed`, error);
      return null;
    }
  }

  async put<T>(url: string, body: any): Promise<T | null> {
    try {
      return await firstValueFrom(this.httpClient.put<T>(this.baseUrl + url, body));
    } catch (error) {
      console.error(`HttpService PUT ${url} failed`, error);
      return null;
    }
  }

  async patch<T>(url: string, body: any): Promise<T | null> {
    try {
      return await firstValueFrom(this.httpClient.patch<T>(this.baseUrl + url, body));
    } catch (error) {
      console.error(`HttpService PATCH ${url} failed`, error);
      return null;
    }
  }

  async delete<T>(url: string): Promise<T | null> {
    try {
      return await firstValueFrom(this.httpClient.delete<T>(this.baseUrl + url));
    } catch (error) {
      console.error(`HttpService DELETE ${url} failed`, error);
      return null;
    }
  }
}
