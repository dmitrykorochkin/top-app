
export interface ProductCharacteristic {
  value: string;
  name: string;
}

export interface ReviewModel {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating:number;
  createAt:Date;
}

export interface ProductModel {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  link: string;
  price: number;
  credit:number;
  oldPrice: number;
  description: string;
  characteristic: ProductCharacteristic[];
  createdAt: Date;
  updatedAt: Date;
  __v:number;
  image:string;
  initialRating:number;
  reviews: any[];
  reviewCount: number;
  reviewAvg: any;
  advantages:string;
}