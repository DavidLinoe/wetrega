export type OrderStatus = 'preparing' | 'on_the_way' | 'delivered' | 'cancelled';

export interface OrderItem {
  name: string;
  quantity: number;
}

export interface Order {
  id: string;
  restaurantName: string;
  status: OrderStatus;
  items: OrderItem[];
  total: string;
  createdAt: string;
}

export interface OrdersData {
  active: Order[];
  past: Order[];
}
