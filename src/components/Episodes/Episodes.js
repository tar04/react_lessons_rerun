import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Episode} from "../Episode/Episode";
import {episodeActions} from "../../store";
import {useSearchParams} from "react-router-dom";
import "./Episodes.css";

const Episodes = () => {

    const {episodes, prev, next} = useSelector(state => state.episodes);

    const [query, setQuery] = useSearchParams({page: "1"});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeActions.getAll({page: query.get("page")}))
    }, [query])

    const prevPage = () => {
        const prevPage = +query.get("page") - 1;
        setQuery({page: prevPage});
    };

    const nextPage = () => {
        const nextPage = +query.get("page") + 1;
        setQuery({page: nextPage});
    };

    return (
        <div >
            <div className={"episodes"}>{episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}</div>
            <button disabled={!prev} onClick={prevPage}>Prev</button>
            <button disabled={!next} onClick={nextPage}>Next</button>

        </div>
    );
};

export {Episodes};