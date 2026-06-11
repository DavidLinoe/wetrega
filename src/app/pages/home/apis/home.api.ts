import { Injectable, inject } from '@angular/core';
import { HttpService } from '@shared/services/http.service';

export interface RestaurantDto {
  id: string;
  name: string;
  description: string;
  phone: string;
  isOpen: boolean;
}

@Injectable({ providedIn: 'root' })
export class HomeApi {
  private readonly http = inject(HttpService);

  getRestaurants(): Promise<RestaurantDto[] | null> {
    return this.http.get<RestaurantDto[]>('/Restaurant');
  }
}
