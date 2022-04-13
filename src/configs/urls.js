const baseURL = process.env.REACT_APP_API;

const urls = {
    posts: "/posts",
    users: "/users",
    comments: "/comments"
};

export default baseURL;
export {
    urls
};