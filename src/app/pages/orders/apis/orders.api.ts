import { Injectable, inject } from '@angular/core';
import { HttpService } from '@shared/services/http.service';

export interface OrderItemDto {
  id: string;
  menuItemId: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

export interface OrderDto {
  id: string;
  customerName: string;
  totalAmount: number;
  status: string;
  createdAt: string;
  items: OrderItemDto[];
}

export interface MenuItemDto {
  id: string;
  restaurantId: string;
  name: string;
  price: number;
}

export interface CreateOrderItemDto {
  menuItemId: string;
  quantity: number;
}

export interface CreateOrderDto {
  customerName: string;
  items: CreateOrderItemDto[];
}

@Injectable({ providedIn: 'root' })
export class OrdersApi {
  private readonly http = inject(HttpService);

  getOrders(): Promise<OrderDto[] | null> {
    return this.http.get<OrderDto[]>('/Order');
  }

  createOrder(dto: CreateOrderDto): Promise<OrderDto | null> {
    return this.http.post<OrderDto>('/Order', dto);
  }

  updateOrderStatus(id: string, statusInt: number): Promise<OrderDto | null> {
    return this.http.patch<OrderDto>(`/Order/${id}/status`, { status: statusInt });
  }

  getMenuItems(): Promise<MenuItemDto[] | null> {
    return this.http.get<MenuItemDto[]>('/MenuItem');
  }
}
