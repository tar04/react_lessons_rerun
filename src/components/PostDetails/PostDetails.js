import React, {useEffect, useState} from "react";
import {Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services";
import {SinglePost} from "../SinglePost/SinglePost";

const PostDetails = () => {

    const {state: post} = useLocation();

    const {id} = useParams();

    const [postById, setPostById] = useState(post);

    useEffect(() => {
        if (!post) {
            postService.getById(id).then(post => setPostById(post));
        } else {
            setPostById(post);
        }
    }, [id, post]);

    return (
        <div>
            {postById && <SinglePost post={postById}/>}
            <Outlet/>
        </div>
    );
};

export {PostDetails};