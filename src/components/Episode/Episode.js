import React from "react";
import {useNavigate} from "react-router-dom"

import "./Episode.css";
import {useDispatch} from "react-redux";
import {episodeActions} from "../../store";

const Episode = ({episode: {name, air_date, episode, characters}}) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const toCharacters = () => {
        dispatch(episodeActions.currentEpisode({episodeName: name}))
        navigate("/characters", {state: characters})
    }

    return (
        <div className={"episode"} onClick={toCharacters}>
            <h1>{name}</h1>
            <h2>{air_date}</h2>
            <h3>{episode}</h3>
        </div>
    );
};

export {Episode};