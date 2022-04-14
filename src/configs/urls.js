const baseURL = process.env.REACT_APP_API;

const urls = {
    posts: "/posts",
    users: "/users",
    comments: "/comments",
    albums: "/albums",
    photos: "/photos"
};

export default baseURL;
export {
    urls
};