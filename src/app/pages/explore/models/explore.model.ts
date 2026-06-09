export interface Restaurant {
  id: string;
  name: string;
  category: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  image: string;
}

export interface ExploreData {
  filters: string[];
  restaurants: Restaurant[];
}
