import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (car) => axiosService.post(urls.cars, car)
}

export {
    carService
}