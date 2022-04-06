import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Snack } from "./Models/Snack.js"
import { CartItem } from "./Models/Cart.js"

class AppState extends EventEmitter {

  total = 0
  snacks = [
    new Snack ({
      name: 'Box Snack', 
      price: 2, 
      img: '../assets/img/boxsnack.png'
    }), 
    new Snack ({
      name: 'Bag Snack', 
      price: 3, 
      img: '../assets/img/bagsnack.png'
    }), 
    new Snack ({
      name: 'Drink Snack', 
      price: 1, 
      img: '../assets/img/drinksnack.jpg'
    })]
    
    cart = []

}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
