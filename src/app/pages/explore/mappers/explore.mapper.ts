import { MenuItemDto, RestaurantDto } from '../apis/explore.api';
import { ExploreData, MenuItem } from '../models/explore.model';

export function mapExploreToData(items: MenuItemDto[], restaurants: RestaurantDto[]): ExploreData {
  const restaurantMap = new Map(restaurants.map((r) => [r.id, r.name]));

  return {
    items: items.map((item) => ({
      id: item.id,
      restaurantId: item.restaurantId,
      restaurantName: restaurantMap.get(item.restaurantId) ?? 'Restaurante',
      name: item.name,
      description: item.description,
      price: `R$ ${Number(item.price).toFixed(2).replace('.', ',')}`,
    })),
  };
}
