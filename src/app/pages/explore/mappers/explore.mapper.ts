import { ExploreDto, RestaurantDto } from '../apis/explore.api';
import { ExploreData, Restaurant } from '../models/explore.model';

export function mapExploreDtoToData(dto: ExploreDto): ExploreData {
  return {
    filters: dto.filters,
    restaurants: dto.restaurants.map(mapRestaurant),
  };
}

function mapRestaurant(dto: RestaurantDto): Restaurant {
  return {
    id: dto.id,
    name: dto.name,
    category: dto.category,
    rating: dto.rating,
    deliveryTime: dto.delivery_time,
    deliveryFee:
      dto.delivery_fee === 0 ? 'Grátis' : `R$ ${dto.delivery_fee.toFixed(2).replace('.', ',')}`,
    image: dto.image,
  };
}
