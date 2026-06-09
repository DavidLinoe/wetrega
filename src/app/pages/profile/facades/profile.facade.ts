import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProfileApi } from '../apis/profile.api';
import { mapProfileDtoToData } from '../mappers/profile.mapper';
import { Profile } from '../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileFacade {
  private readonly api = inject(ProfileApi);
  private readonly _data$ = new BehaviorSubject<Profile | null>(null);
  readonly data$: Observable<Profile | null> = this._data$.asObservable();

  async load(): Promise<void> {
    const dto = await this.api.getProfile();
    if (!dto) return;
    this._data$.next(mapProfileDtoToData(dto));
  }
}
