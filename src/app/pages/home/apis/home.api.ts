import { Injectable, inject } from '@angular/core';
import { HttpService } from '@shared/services/http.service';

export interface HomeDto {
  user_name: string;
  offer: {
    id: string;
    tag: string;
    title: string;
    description: string;
    code: string;
  };
  categories: Array<{
    id: string;
    name: string;
    icon: string;
    places_count: number;
  }>;
}

@Injectable({ providedIn: 'root' })
export class HomeApi {
  private readonly http = inject(HttpService);

  getHome(): Promise<HomeDto | null> {
    return this.http.get<HomeDto>('/home');
  }
}
