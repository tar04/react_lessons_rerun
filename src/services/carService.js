import {axiosService} from "./axiosService";
import {urls} from "../config";

const carService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`).then(value => value.data),
    create: (car) => axiosService.post(urls.cars, car).then(value => value.data),
    updateById: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/id`)
};

export {
    carService
};