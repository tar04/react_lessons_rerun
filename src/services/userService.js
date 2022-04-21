import {axiosService} from "./axiosService";
import {urls} from "../configs";

const userService = {
    getAll: (page, _limit = 2) => axiosService.get(urls.users, {
        params: {
            _start: (page - 1) * _limit,
            _limit
        }
    }).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getPostsByUsersId: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`).then(value => value.data),
    getAlbumsByUserId: (id) => axiosService.get(`${urls.users}/${id}${urls.albums}`).then(value => value.data),
    getPhotosByAlbumId: (id) => axiosService.get(`${urls.users}/${id}${urls.albums}`).then(value => value.data)
}

export {
    userService
}