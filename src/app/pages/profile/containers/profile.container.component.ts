import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProfileFacade } from '../facades/profile.facade';
import { ProfileViewComponent } from '../components/profile.component';
import {
  CreateMenuItemPayload,
  CreateRestaurantPayload,
  UpdateRestaurantStatusPayload,
} from '../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.container.component.html',
  imports: [AsyncPipe, ProfileViewComponent],
})
export class ProfileComponent implements OnInit {
  private readonly facade = inject(ProfileFacade);
  protected readonly data$ = this.facade.data$;

  @ViewChild(ProfileViewComponent) private view?: ProfileViewComponent;

  ngOnInit(): void {
    this.facade.load();
  }

  protected async onCreateRestaurant(payload: CreateRestaurantPayload): Promise<void> {
    await this.facade.createRestaurant(payload);
    this.view?.onDone();
  }

  protected async onCreateMenuItem(payload: CreateMenuItemPayload): Promise<void> {
    await this.facade.createMenuItem(payload);
    this.view?.onDone();
  }

  protected async onUpdateRestaurantStatus(payload: UpdateRestaurantStatusPayload): Promise<void> {
    await this.facade.updateRestaurantStatus(payload.restaurantId, payload.isOpen);
  }
}
