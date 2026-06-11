import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrdersApi } from '../apis/orders.api';
import { mapOrdersDtoToData } from '../mappers/orders.mapper';
import { CreateOrderPayload, OrderStatus, OrdersData } from '../models/orders.model';

@Injectable({ providedIn: 'root' })
export class OrdersFacade {
  private readonly api = inject(OrdersApi);
  private readonly _data$ = new BehaviorSubject<OrdersData | null>(null);
  readonly data$: Observable<OrdersData | null> = this._data$.asObservable();

  async load(): Promise<void> {
    const [orders, menuItems] = await Promise.all([
      this.api.getOrders(),
      this.api.getMenuItems(),
    ]);
    if (!orders || !menuItems) return;
    this._data$.next(mapOrdersDtoToData(orders, menuItems));
  }

  async createOrder(payload: CreateOrderPayload): Promise<boolean> {
    const result = await this.api.createOrder(payload);
    if (result) {
      await this.load();
      return true;
    }
    return false;
  }

  async updateOrderStatus(orderId: string, status: OrderStatus): Promise<boolean> {
    const result = await this.api.updateOrderStatus(orderId, status);
    if (result) {
      await this.load();
      return true;
    }
    return false;
  }
}
