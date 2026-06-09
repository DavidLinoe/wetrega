import { ProfileDto } from '../apis/profile.api';
import { Profile } from '../models/profile.model';

export function mapProfileDtoToData(dto: ProfileDto): Profile {
  return {
    name: dto.full_name,
    email: dto.email,
    avatar: dto.avatar,
    menu: dto.menu.map((item) => ({ icon: item.icon, label: item.label })),
  };
}
