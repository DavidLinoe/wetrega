import { RestaurantDto } from '../apis/profile.api';
import { ProfileData, RestaurantOption } from '../models/profile.model';

export function mapProfileData(restaurants: RestaurantDto[]): ProfileData {
  return {
    restaurants: restaurants.map(
      (r): RestaurantOption => ({ id: r.id, name: r.name, isOpen: r.isOpen }),
    ),
  };
}
