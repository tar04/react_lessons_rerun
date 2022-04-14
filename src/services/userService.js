import {axiosService} from "./axiosService";
import {urls} from "../configs";

const userService={
    getAll:()=>axiosService.get(urls.users).then(value => value.data),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getPostsByUsersId:(id)=>axiosService.get(`${urls.users}/${id}${urls.posts}`).then(value => value.data)
}

export {
    userService
}