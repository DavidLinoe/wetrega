export type OrderStatus = 'Pending' | 'Preparing' | 'OutForDelivery' | 'Delivered' | 'Canceled';

export const ORDER_STATUS_LABEL: Record<OrderStatus, string> = {
  Pending: 'Pendente',
  Preparing: 'Preparando',
  OutForDelivery: 'A caminho',
  Delivered: 'Entregue',
  Canceled: 'Cancelado',
};

export const ORDER_STATUS_CLASS: Record<OrderStatus, string> = {
  Pending: 'bg-gray-100 text-gray-600',
  Preparing: 'bg-amber-100 text-amber-700',
  OutForDelivery: 'bg-blue-100 text-blue-700',
  Delivered: 'bg-emerald-100 text-emerald-700',
  Canceled: 'bg-rose-100 text-rose-700',
};

// Maps string status (returned by backend GET) to its enum integer value (required by backend PATCH)
export const ORDER_STATUS_INT: Record<OrderStatus, number> = {
  Pending: 1,
  Preparing: 2,
  OutForDelivery: 3,
  Delivered: 4,
  Canceled: 5,
};

export const ORDER_STATUS_OPTIONS: { value: OrderStatus; label: string }[] = [
  { value: 'Pending', label: 'Pendente' },
  { value: 'Preparing', label: 'Preparando' },
  { value: 'OutForDelivery', label: 'A caminho' },
  { value: 'Delivered', label: 'Entregue' },
  { value: 'Canceled', label: 'Cancelado' },
];

export interface OrderItem {
  id: string;
  menuItemId: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

export interface Order {
  id: string;
  customerName: string;
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  items: OrderItem[];
}

export interface MenuItemOption {
  id: string;
  name: string;
  price: string;
}

export interface OrdersData {
  orders: Order[];
  menuItems: MenuItemOption[];
}

export interface CreateOrderPayload {
  customerName: string;
  items: { menuItemId: string; quantity: number }[];
}

export interface UpdateOrderStatusPayload {
  orderId: string;
  status: OrderStatus;
}
