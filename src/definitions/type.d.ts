export type Product = {
  id: number | string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type TPagination = {
  total: number;
  skip: number;
  limit: number;
};
