import React, {useEffect, useState} from "react";

import {postService} from "../../services";
import {Post} from "../Post/Post";
import "./Posts.css";

const Posts = () => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postService.getAll().then(posts => setPosts(posts));
    }, []);

    return (
        <div className={"posts"}>
            {posts && posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};