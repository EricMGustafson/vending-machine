import { ProxyState } from "../AppState.js"
import { cartService } from "../Services/CartService.js"


function _drawCart() {
  let template = ''
  ProxyState.cart.forEach(c => template += c.template)
  document.getElementById('cart').innerHTML = template
}

export class CartController {
  constructor() {
    console.log('hello from the CartController')
    cartService.hello()
    _drawCart()
  }
}