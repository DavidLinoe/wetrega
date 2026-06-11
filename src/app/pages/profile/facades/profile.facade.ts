import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProfileApi } from '../apis/profile.api';
import { mapProfileData } from '../mappers/profile.mapper';
import {
  CreateMenuItemPayload,
  CreateRestaurantPayload,
  ProfileData,
} from '../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileFacade {
  private readonly api = inject(ProfileApi);
  private readonly _data$ = new BehaviorSubject<ProfileData | null>(null);
  readonly data$: Observable<ProfileData | null> = this._data$.asObservable();

  async load(): Promise<void> {
    const restaurants = await this.api.getRestaurants();
    if (!restaurants) return;
    this._data$.next(mapProfileData(restaurants));
  }

  async createRestaurant(payload: CreateRestaurantPayload): Promise<boolean> {
    const result = await this.api.createRestaurant(payload);
    if (result) {
      await this.load();
      return true;
    }
    return false;
  }

  async updateRestaurantStatus(restaurantId: string, isOpen: boolean): Promise<boolean> {
    const result = await this.api.updateRestaurantStatus(restaurantId, isOpen);
    if (result) {
      await this.load();
      return true;
    }
    return false;
  }

  async createMenuItem(payload: CreateMenuItemPayload): Promise<boolean> {
    const result = await this.api.createMenuItem(payload);
    return result !== null;
  }
}
