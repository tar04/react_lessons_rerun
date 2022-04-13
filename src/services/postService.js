import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postService={
    getAll:()=>axiosService.get(urls.posts).then(value => value.data),
    getById:(id)=>axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getCommentsByPostsId:(id)=>axiosService.get(`${urls.posts}/${id}${urls.comments}`)
}

export {
    postService
}