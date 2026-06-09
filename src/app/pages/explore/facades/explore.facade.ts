import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ExploreApi } from '../apis/explore.api';
import { mapExploreDtoToData } from '../mappers/explore.mapper';
import { ExploreData } from '../models/explore.model';

@Injectable({ providedIn: 'root' })
export class ExploreFacade {
  private readonly api = inject(ExploreApi);
  private readonly _data$ = new BehaviorSubject<ExploreData | null>(null);
  readonly data$: Observable<ExploreData | null> = this._data$.asObservable();

  async load(): Promise<void> {
    const dto = await this.api.getExplore();
    if (!dto) return;
    this._data$.next(mapExploreDtoToData(dto));
  }
}
