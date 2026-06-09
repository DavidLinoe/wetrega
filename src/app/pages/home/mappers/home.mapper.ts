import { HomeDto } from '../apis/home.api';
import { HomeData } from '../models/home.model';

export function mapHomeDtoToData(dto: HomeDto): HomeData {
  return {
    userName: dto.user_name,
    offer: {
      id: dto.offer.id,
      tag: dto.offer.tag,
      title: dto.offer.title,
      description: dto.offer.description,
      code: dto.offer.code,
    },
    categories: dto.categories.map((category) => ({
      id: category.id,
      name: category.name,
      icon: category.icon,
      placesCount: category.places_count,
    })),
  };
}
