import { Injectable, inject } from '@angular/core';
import { HttpService } from '@shared/services/http.service';

export interface RestaurantDto {
  id: string;
  name: string;
  category: string;
  rating: number;
  delivery_time: string;
  delivery_fee: number;
  image: string;
}

export interface ExploreDto {
  filters: string[];
  restaurants: RestaurantDto[];
}

@Injectable({ providedIn: 'root' })
export class ExploreApi {
  private readonly http = inject(HttpService);

  getExplore(): Promise<ExploreDto | null> {
    return this.http.get<ExploreDto>('/explore');
  }
}
