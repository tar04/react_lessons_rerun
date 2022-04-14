import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postService} from "../../services";

const CommentsOfPost = () => {

    const [commentsOfPost, setCommentsOfPost] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        postService.getCommentsByPostsId(id).then(comments => setCommentsOfPost(comments))
    }, [id]);

    return (
        <div>
            <h1 style={{color: "white", paddingTop: "20px"}}>Comments:</h1>
            {!commentsOfPost ? <h1 style={{color: "white"}}>Loading...</h1> : commentsOfPost.map(comment => <h2
                style={{color: "white", paddingTop: "20px"}}>{comment.id}) User <i>{comment.email}</i> writes: {comment.body}</h2>)}
        </div>
    );
};

export {CommentsOfPost};