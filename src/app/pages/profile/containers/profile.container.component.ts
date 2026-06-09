import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProfileFacade } from '../facades/profile.facade';
import { ProfileViewComponent } from '../components/profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.container.component.html',
  imports: [AsyncPipe, ProfileViewComponent],
})
export class ProfileComponent implements OnInit {
  private readonly facade = inject(ProfileFacade);
  protected readonly data$ = this.facade.data$;

  ngOnInit(): void {
    this.facade.load();
  }
}
