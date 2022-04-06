import { ProxyState } from "../AppState.js";
import { CartController } from "../Controllers/CartController.js";

class SnackService {

  hello(){
    console.log('Hello from SnackService');
  }

  buySnack(snackName){
    let purchasedSnack = ProxyState.snacks.find(s => s.name == snackName)
    ProxyState.total += purchasedSnack.price
    document.getElementById('total').innerText = JSON.stringify(ProxyState.total)
    ProxyState.cart.push(snackName)
    
  }
  
}




export const snackService = new SnackService()