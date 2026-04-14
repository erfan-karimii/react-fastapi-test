export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string | null;
  is_amazing?: boolean | null;
  image_url?: string | null;
}