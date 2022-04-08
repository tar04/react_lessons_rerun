import React from "react";
import {Post} from "../Post/Post";

const Posts = ({posts}) => {
    console.log(posts)
    return (
        <div>
            {posts && posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export  {Posts};