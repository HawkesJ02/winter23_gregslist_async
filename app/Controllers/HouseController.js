import { House } from "../Models/House.js";
import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { Pop } from "../Utils/Pop.js";
import { houseService } from "../Services/HouseService.js";
import { getFormData } from "../Utils/FormHandler.js";

function _draw_houses(){
  let template = ''
  appState.houses.forEach(h => template += h.house_template)
  setHTML('listings', template)
}

export class HouseController{
  constructor(){
    console.log('test constructor house controller');
    this.get_houses()
    appState.on('houses', _draw_houses)
  }

  house_listings(){
    _draw_houses()
  }

 async get_houses() {
  try {
    await houseService.get_houses()
  } catch (error) {
    Pop.error(error.message)
    console.log(error);
  }
  }

  async create_house(){
    try {
      window.event?.preventDefault()
      const form = window.event.target
      const form_data = getFormData(form)
      console.log(formdata);
    } catch (error) {
      Pop.error(error.message)
      console.log(error);
    }
  }

  draw_form(houseId){
try {
  if (houseId) {
    let house = appState.houses.find(house => house.id == houseId)
  }
} catch (error) {
  Pop.error(error.message)
  console.log(error);
}
  }
}