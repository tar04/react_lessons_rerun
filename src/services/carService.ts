import {axiosService, Res} from "./axiosService";
import {urls} from "../configs";
import {ICar} from "../interfaces";

const carService = {
    getAll: (): Res<ICar[]> => axiosService.get(urls.cars),
    getById: (id: string): Res<ICar> => axiosService.get(`${urls.cars}/${id}`),
    create: (car: ICar): Res<ICar> => axiosService.post(urls.cars, car),
    updateById: (id: string, car: ICar): Res<ICar> => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id: string): Res<void> => axiosService.delete(`${urls.cars}/${id}`)
};

export {
    carService
};