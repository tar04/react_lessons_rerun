import React from "react";

import "./Header.css";
import {useSelector} from "react-redux";

const Header = () => {

    const {currentEpisode} = useSelector(state => state.episodes);

    return (
        <div className={"header"}>
            <h1>Rick and Morty</h1>
            {currentEpisode && <h1>{currentEpisode}</h1>}
        </div>
    );
};

export {Header};