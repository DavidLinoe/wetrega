import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HomeApi } from '../apis/home.api';
import { mapHomeDtoToData } from '../mappers/home.mapper';
import { HomeData } from '../models/home.model';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  private readonly api = inject(HomeApi);
  private readonly _data$ = new BehaviorSubject<HomeData | null>(null);
  readonly data$: Observable<HomeData | null> = this._data$.asObservable();

  async load(): Promise<void> {
    const dto = await this.api.getHome();
    if (!dto) return;
    this._data$.next(mapHomeDtoToData(dto));
  }
}
