export interface Product {
  id: string
  title: string
  price: number
  image?: string
}

export interface CartItem extends Product {
  quantity: number
}

export interface CartState {
  items: Record<string, CartItem>
  totalItems: number
  totalPrice: number
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "INCREASE"; payload: string }
  | { type: "DECREASE"; payload: string }
  | { type: "CLEAR" }
