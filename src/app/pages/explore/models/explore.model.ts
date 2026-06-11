export interface MenuItem {
  id: string;
  restaurantId: string;
  restaurantName: string;
  name: string;
  description: string;
  price: string;
}

export interface ExploreData {
  items: MenuItem[];
}
