import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {userService} from "../../services";

const PostsOfUser = () => {

    const [postsOfUser, setPostsOfUser] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        userService.getPostsByUsersId(id).then(posts => setPostsOfUser(posts))
    }, [id]);

    return (
        <div>
            <h1 style={{color: "white", paddingTop: "20px"}}>Posts:</h1>
            {!postsOfUser ? <h1 style={{color: "white"}}>Loading...</h1> : postsOfUser.map(post => <h2 key={post.id}
                style={{color: "white", paddingTop: "20px"}}>{post.id}) {post.title}</h2>)}
        </div>
    );
};

export {PostsOfUser};