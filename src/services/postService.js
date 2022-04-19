import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postService = {
    getAll: (page, _limit = 2) => axiosService.get(urls.posts, {
        params: {
            _start: (page - 1) * _limit,
            _limit
        }
    }).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getCommentsByPostsId: (id) => axiosService.get(`${urls.posts}/${id}${urls.comments}`).then(value => value.data)
}

export {
    postService
}