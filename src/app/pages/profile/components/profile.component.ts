import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  CreateMenuItemPayload,
  CreateRestaurantPayload,
  ProfileData,
  UpdateRestaurantStatusPayload,
} from '../models/profile.model';

type ActiveTab = 'restaurant' | 'menuitem' | 'list';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile.component.html',
  imports: [FormsModule],
})
export class ProfileViewComponent {
  readonly data = input.required<ProfileData>();
  readonly createRestaurant = output<CreateRestaurantPayload>();
  readonly createMenuItem = output<CreateMenuItemPayload>();
  readonly updateRestaurantStatus = output<UpdateRestaurantStatusPayload>();

  protected activeTab = signal<ActiveTab>('list');
  protected submitting = signal(false);

  // Restaurant form
  protected restName = signal('');
  protected restDescription = signal('');
  protected restPhone = signal('');
  protected restAddress = signal('');

  // MenuItem form
  protected itemRestaurantId = signal('');
  protected itemName = signal('');
  protected itemDescription = signal('');
  protected itemPrice = signal<number | null>(null);

  protected setTab(tab: ActiveTab): void {
    this.activeTab.set(tab);
  }

  protected submitRestaurant(): void {
    const name = this.restName().trim();
    if (!name) return;
    this.submitting.set(true);
    this.createRestaurant.emit({
      name,
      description: this.restDescription().trim(),
      phone: this.restPhone().trim(),
      address: this.restAddress().trim(),
    });
  }

  protected submitMenuItem(): void {
    const name = this.itemName().trim();
    const restaurantId = this.itemRestaurantId();
    const price = this.itemPrice();
    if (!name || !restaurantId || price === null || price <= 0) return;
    this.submitting.set(true);
    this.createMenuItem.emit({
      restaurantId,
      name,
      description: this.itemDescription().trim(),
      price,
    });
  }

  protected toggleStatus(restaurantId: string, currentIsOpen: boolean): void {
    this.updateRestaurantStatus.emit({ restaurantId, isOpen: !currentIsOpen });
  }

  onDone(): void {
    this.submitting.set(false);
    this.restName.set('');
    this.restDescription.set('');
    this.restPhone.set('');
    this.restAddress.set('');
    this.itemRestaurantId.set('');
    this.itemName.set('');
    this.itemDescription.set('');
    this.itemPrice.set(null);
  }
}
