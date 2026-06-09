import { Component, input } from '@angular/core';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile.component.html',
})
export class ProfileViewComponent {
  readonly data = input.required<Profile>();
}
