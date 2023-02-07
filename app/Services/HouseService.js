import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { sandboxApi } from "./AxiosService.js";

class HouseService{

async get_houses() {
  const response = await sandboxApi.get('/houses/')
  console.log(response.data);
  const newArray = response.data.map(house => new House(house))
  appState.houses = newArray
  console.log(appState.houses)
}

}

export const houseService = new HouseService()