import { Component, input } from '@angular/core';
import { OrderStatus, OrdersData } from '../models/orders.model';

const STATUS_LABELS: Record<OrderStatus, string> = {
  preparing: 'Preparando',
  on_the_way: 'A caminho',
  delivered: 'Entregue',
  cancelled: 'Cancelado',
};

const STATUS_CLASSES: Record<OrderStatus, string> = {
  preparing: 'bg-amber-100 text-amber-700',
  on_the_way: 'bg-blue-100 text-blue-700',
  delivered: 'bg-emerald-100 text-emerald-700',
  cancelled: 'bg-rose-100 text-rose-700',
};

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders.component.html',
})
export class OrdersViewComponent {
  readonly data = input.required<OrdersData>();

  protected statusLabel(status: OrderStatus): string {
    return STATUS_LABELS[status];
  }

  protected statusClass(status: OrderStatus): string {
    return STATUS_CLASSES[status];
  }
}
