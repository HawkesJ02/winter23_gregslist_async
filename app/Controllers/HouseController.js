import { House } from "../Models/House.js";
import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { Pop } from "../Utils/Pop.js";
import { houseService } from "../Services/HouseService.js";

function _draw_houses(){
  let template = ''
}

export class HouseController{
  constructor(){
    console.log('test constructor house controller');
    this.get_houses()
  }
 async get_houses() {
  try {
    await houseService.get_houses()
  } catch (error) {
    Pop.error(error.message)
    console.log(error);
  }
  }
}