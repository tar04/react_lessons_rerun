import {axiosService} from "./axiosService";
import {urls} from "../config";

const carService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    create: (car) => axiosService.post(urls.cars, car).then(value => value.data),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/id`)
}