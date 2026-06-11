import { MenuItemDto, OrderDto } from '../apis/orders.api';
import { MenuItemOption, Order, OrderStatus, OrdersData } from '../models/orders.model';

export function mapOrdersDtoToData(orders: OrderDto[], menuItems: MenuItemDto[]): OrdersData {
  return {
    orders: orders.map(mapOrder),
    menuItems: menuItems.map(mapMenuItem),
  };
}

function mapOrder(dto: OrderDto): Order {
  return {
    id: dto.id,
    customerName: dto.customerName,
    totalAmount: dto.totalAmount,
    status: dto.status as OrderStatus,
    createdAt: dto.createdAt,
    items: (dto.items ?? []).map((item) => ({
      id: item.id,
      menuItemId: item.menuItemId,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      subtotal: item.subtotal,
    })),
  };
}

function mapMenuItem(dto: MenuItemDto): MenuItemOption {
  return {
    id: dto.id,
    name: dto.name,
    price: `R$ ${Number(dto.price).toFixed(2).replace('.', ',')}`,
  };
}
