import { ProxyState } from "../AppState.js"


class CartService {
  hello() {
    console.log('Hello from the CartService');
  }

}


export const cartService = new CartService()