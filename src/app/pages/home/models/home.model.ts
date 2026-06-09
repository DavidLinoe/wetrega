export interface Category {
  id: string;
  name: string;
  icon: string;
  placesCount: number;
}

export interface Offer {
  id: string;
  tag: string;
  title: string;
  description: string;
  code: string;
}

export interface HomeData {
  userName: string;
  offer: Offer;
  categories: Category[];
}
