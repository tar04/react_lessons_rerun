import {axiosService} from "./axiosService";
import {urls} from "../configs";

const albumService = {
    getPhotosByAlbumId: (id) => axiosService.get(`${urls.albums}/${id}${urls.photos}`).then(value => value.data)
}

export {
    albumService
}