import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  CreateOrderPayload,
  ORDER_STATUS_CLASS,
  ORDER_STATUS_LABEL,
  ORDER_STATUS_OPTIONS,
  Order,
  OrderStatus,
  OrdersData,
  UpdateOrderStatusPayload,
} from '../models/orders.model';

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders.component.html',
  imports: [FormsModule],
})
export class OrdersViewComponent {
  readonly data = input.required<OrdersData>();
  readonly createOrder = output<CreateOrderPayload>();
  readonly updateStatus = output<UpdateOrderStatusPayload>();

  protected showForm = signal(false);
  protected customerName = signal('');
  protected selectedItemId = signal('');
  protected quantity = signal(1);
  protected submitting = signal(false);

  protected readonly statusOptions = ORDER_STATUS_OPTIONS;

  protected statusLabel(status: OrderStatus): string {
    return ORDER_STATUS_LABEL[status] ?? status;
  }

  protected statusClass(status: OrderStatus): string {
    return ORDER_STATUS_CLASS[status] ?? 'bg-gray-100 text-gray-600';
  }

  protected menuItemName(menuItemId: string): string {
    const found = this.data().menuItems.find((m) => m.id === menuItemId);
    return found?.name ?? menuItemId.slice(0, 8) + '...';
  }

  protected toggleForm(): void {
    this.showForm.update((v) => !v);
    this.customerName.set('');
    this.selectedItemId.set('');
    this.quantity.set(1);
  }

  protected submit(): void {
    const name = this.customerName().trim();
    const itemId = this.selectedItemId();
    const qty = this.quantity();

    if (!name || !itemId || qty < 1) return;

    this.submitting.set(true);
    this.createOrder.emit({
      customerName: name,
      items: [{ menuItemId: itemId, quantity: qty }],
    });
  }

  protected onStatusChange(order: Order, status: string): void {
    if (!status) return;
    this.updateStatus.emit({ orderId: order.id, status: status as OrderStatus });
  }

  onCreated(): void {
    this.submitting.set(false);
    this.showForm.set(false);
  }
}
