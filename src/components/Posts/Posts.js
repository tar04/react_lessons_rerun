import React, {useEffect, useState} from "react";

import {postService} from "../../services";
import {Post} from "../Post/Post";
import "./Posts.css";
import {useSearchParams} from "react-router-dom";

const Posts = () => {

    const [posts, setPosts] = useState(null);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        postService.getAll(query.get('page'), 10).then(posts => setPosts(posts))
    }, [query]);

    const nextPage = () => {
        let page = query.get('page');
        page = +page + 1;
        setQuery({page: page.toString()});
    }

    const prevPage = () => {
        let page = query.get('page');
        page = +page - 1;
        setQuery({page: page.toString()});
    }

    return (
        <div className={"posts"}>
            {posts && posts.map(post => <Post key={post.id} post={post}/>)}
            <div className={"pageController"}>
                {posts && posts[posts.length - 1].id !== 100 && <button onClick={() => nextPage()}>Next page</button>}
                {query.get('page') != 1 && <button onClick={() => prevPage()}>Prev page</button>}
            </div>
        </div>
    );
};

export {Posts};