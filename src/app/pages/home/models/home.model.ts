export interface RestaurantItem {
  id: string;
  name: string;
  description: string;
  phone: string;
  isOpen: boolean;
}

export interface HomeData {
  restaurants: RestaurantItem[];
}
