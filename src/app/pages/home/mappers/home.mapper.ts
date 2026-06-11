import { RestaurantDto } from '../apis/home.api';
import { HomeData, RestaurantItem } from '../models/home.model';

export function mapRestaurantsDtoToData(dtos: RestaurantDto[]): HomeData {
  return {
    restaurants: dtos.map(mapRestaurant),
  };
}

function mapRestaurant(dto: RestaurantDto): RestaurantItem {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    phone: dto.phone,
    isOpen: dto.isOpen,
  };
}
