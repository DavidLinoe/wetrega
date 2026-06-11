import { Injectable, inject } from '@angular/core';
import { HttpService } from '@shared/services/http.service';

export interface MenuItemDto {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
}

export interface RestaurantDto {
  id: string;
  name: string;
  isOpen: boolean;
}

@Injectable({ providedIn: 'root' })
export class ExploreApi {
  private readonly http = inject(HttpService);

  getMenuItems(): Promise<MenuItemDto[] | null> {
    return this.http.get<MenuItemDto[]>('/MenuItem');
  }

  getRestaurants(): Promise<RestaurantDto[] | null> {
    return this.http.get<RestaurantDto[]>('/Restaurant');
  }
}
