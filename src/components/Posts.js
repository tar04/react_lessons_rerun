import React, {useEffect, useState} from "react";

import {Post} from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response=>response.json())
            .then(posts=>setPosts(posts))
    }, []);

    return (
        <div className={"posts"}>
            <h1>Posts:</h1>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};