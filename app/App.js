import { CarsController } from "./Controllers/CarsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { HouseController } from "./Controllers/HouseController.js";

class App {
  carsController = new CarsController()
  houseController = new HouseController()
}

window["app"] = new App();
