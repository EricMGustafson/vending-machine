import { ProxyState } from "../AppState.js";
import { snackService } from "../Services/SnackService.js";

function _drawSnack() {
  let template = ''
  ProxyState.snacks.forEach(s => template += s.Template)
  document.getElementById('snacks').innerHTML = template
}

export class SnackController {
  constructor() {
    console.log('Hello from SnackController')
    snackService.hello()
    _drawSnack()
  }

  buySnack(snackName) {
    snackService.buySnack(snackName)
  }
}