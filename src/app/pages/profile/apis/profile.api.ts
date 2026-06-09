import { Injectable, inject } from '@angular/core';
import { HttpService } from '@shared/services/http.service';

export interface ProfileDto {
  full_name: string;
  email: string;
  avatar: string;
  menu: Array<{ icon: string; label: string }>;
}

@Injectable({ providedIn: 'root' })
export class ProfileApi {
  private readonly http = inject(HttpService);

  getProfile(): Promise<ProfileDto | null> {
    return this.http.get<ProfileDto>('/profile');
  }
}
