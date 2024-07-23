export interface Product {
  _id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  rate: number;
  price: number;
  color: string;
  size: string;
}

export interface CartItem {
  _id: string;
  image: string;
  title: string;
  price: number;
  product: Product;
  qty: number;
}
