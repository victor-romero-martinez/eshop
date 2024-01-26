// Product
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

// Pagination
export type TPagination = {
  total: number;
  skip: number;
  limit: number;
};

// link
export type Tlinks = {
  url: string;
  name: string;
}[];

// User
export type TUser = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  domain: string;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
};

export type Hair = {
  color: string;
  type: string;
};

export type Address = {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
};

export type Coordinates = {
  lat: number;
  lng: number;
};

export type Bank = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

export type Company = {
  address: Address2;
  department: string;
  name: string;
  title: string;
};

export type Address2 = {
  address: string;
  city: string;
  coordinates: Coordinates2;
  postalCode: string;
  state: string;
};

export type Coordinates2 = {
  lat: number;
  lng: number;
};

export type Crypto = {
  coin: string;
  wallet: string;
  network: string;
};

export type TUserAuthResponse = {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  image?: string;
  token: string;
};
