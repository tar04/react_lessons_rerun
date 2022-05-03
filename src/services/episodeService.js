import {axiosService} from "./axiosService";
import {urls} from "../configs";

const episodeService = {
    getAll: (page = 1) => axiosService.get(urls.episode, {params: {page}})
}

export {episodeService}