import { OrderDto, OrdersDto } from '../apis/orders.api';
import { Order, OrdersData } from '../models/orders.model';

export function mapOrdersDtoToData(dto: OrdersDto): OrdersData {
  return {
    active: dto.active.map(mapOrder),
    past: dto.past.map(mapOrder),
  };
}

function mapOrder(dto: OrderDto): Order {
  return {
    id: dto.id,
    restaurantName: dto.restaurant_name,
    status: dto.status,
    items: dto.items.map((item) => ({ name: item.name, quantity: item.quantity })),
    total: `R$ ${dto.total.toFixed(2).replace('.', ',')}`,
    createdAt: dto.created_at,
  };
}
