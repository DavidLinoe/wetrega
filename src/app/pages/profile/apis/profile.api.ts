import { Injectable, inject } from '@angular/core';
import { HttpService } from '@shared/services/http.service';

export interface RestaurantCreateDto {
  name: string;
  description: string;
  phone: string;
  address: string;
}

export interface MenuItemCreateDto {
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
export class ProfileApi {
  private readonly http = inject(HttpService);

  getRestaurants(): Promise<RestaurantDto[] | null> {
    return this.http.get<RestaurantDto[]>('/Restaurant');
  }

  createRestaurant(dto: RestaurantCreateDto): Promise<RestaurantDto | null> {
    return this.http.post<RestaurantDto>('/Restaurant', dto);
  }

  updateRestaurantStatus(id: string, isOpen: boolean): Promise<RestaurantDto | null> {
    return this.http.patch<RestaurantDto>(`/Restaurant/${id}/status`, { isOpen });
  }

  createMenuItem(dto: MenuItemCreateDto): Promise<unknown | null> {
    return this.http.post<unknown>('/MenuItem', dto);
  }
}
