import { CartController } from "./Controllers/CartController.js";
import { SnackController } from "./Controllers/SnackController.js";


class App {
  snackController = new SnackController()
  cartController = new CartController()
}

window["app"] = new App();
