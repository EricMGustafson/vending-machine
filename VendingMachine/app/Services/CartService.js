import { ProxyState } from "../AppState.js"


class CartService {
  hello() {
    console.log('Hello from the CartService');
  }

  removeSnack() {
    debugger
    ProxyState.cart.pop()
    ProxyState.cart = ProxyState.cart
  }
 
}


export const cartService = new CartService()