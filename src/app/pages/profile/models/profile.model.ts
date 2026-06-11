export interface RestaurantOption {
  id: string;
  name: string;
  isOpen: boolean;
}

export interface ProfileData {
  restaurants: RestaurantOption[];
}

export interface CreateRestaurantPayload {
  name: string;
  description: string;
  phone: string;
  address: string;
}

export interface CreateMenuItemPayload {
  restaurantId: string;
  name: string;
  description: string;
  price: number;
}

export interface UpdateRestaurantStatusPayload {
  restaurantId: string;
  isOpen: boolean;
}
