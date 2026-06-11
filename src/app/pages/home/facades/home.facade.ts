import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HomeApi } from '../apis/home.api';
import { mapRestaurantsDtoToData } from '../mappers/home.mapper';
import { HomeData } from '../models/home.model';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  private readonly api = inject(HomeApi);
  private readonly _data$ = new BehaviorSubject<HomeData | null>(null);
  readonly data$: Observable<HomeData | null> = this._data$.asObservable();

  async load(): Promise<void> {
    const dtos = await this.api.getRestaurants();
    if (!dtos) return;
    this._data$.next(mapRestaurantsDtoToData(dtos));
  }
}
