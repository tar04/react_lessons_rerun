import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (car) => axiosService.post(urls.cars, car),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateById: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar)
};

export {
    carService
};