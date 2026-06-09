import { Injectable, inject } from '@angular/core';
import { HttpService } from '@shared/services/http.service';
import { OrderStatus } from '../models/orders.model';

export interface OrderItemDto {
  name: string;
  quantity: number;
}

export interface OrderDto {
  id: string;
  restaurant_name: string;
  status: OrderStatus;
  items: OrderItemDto[];
  total: number;
  created_at: string;
}

export interface OrdersDto {
  active: OrderDto[];
  past: OrderDto[];
}

@Injectable({ providedIn: 'root' })
export class OrdersApi {
  private readonly http = inject(HttpService);

  getOrders(): Promise<OrdersDto | null> {
    return this.http.get<OrdersDto>('/orders');
  }
}
