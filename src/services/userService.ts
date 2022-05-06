import {AxiosResponse} from "axios";

import {urls} from "../configs";
import {IUser} from "../interfaces";
import {axiosService} from "./axiosService";

type Res<T> = Promise<AxiosResponse<T>>

const userService = {
    getAll: (): Res<IUser[]> => axiosService.get(urls.users)
}

export {
    userService
}