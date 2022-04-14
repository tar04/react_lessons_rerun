import React, {useEffect, useState} from "react";
import {Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services";
import {SinglePost} from "../SinglePost/SinglePost";

const PostDetails = () => {

    const {id} = useParams();

    const [postById, setPostById] = useState(null);

    const {state: post} = useLocation();

    useEffect(() => {
        if (id) {
            postService.getById(id).then(post => setPostById(post));
        } else {
            setPostById(post);
        }
    }, [id]);

    return (
        <div>
            {postById && <SinglePost post={postById}/>}
            <Outlet/>
        </div>
    );
};

export {PostDetails};