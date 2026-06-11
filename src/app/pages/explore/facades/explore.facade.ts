import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ExploreApi } from '../apis/explore.api';
import { mapExploreToData } from '../mappers/explore.mapper';
import { ExploreData } from '../models/explore.model';

@Injectable({ providedIn: 'root' })
export class ExploreFacade {
  private readonly api = inject(ExploreApi);
  private readonly _data$ = new BehaviorSubject<ExploreData | null>(null);
  readonly data$: Observable<ExploreData | null> = this._data$.asObservable();

  async load(): Promise<void> {
    const [items, restaurants] = await Promise.all([
      this.api.getMenuItems(),
      this.api.getRestaurants(),
    ]);
    if (!items || !restaurants) return;
    this._data$.next(mapExploreToData(items, restaurants));
  }
}
