import React from "react";

import "./Photo.css";

const Photo = ({photo: {albumId, id, title, url}}) => {
    return (
        <div className={"photo"}>
            <div>
                <p>AlbumId: {albumId}</p>
                <p>Id: {id}</p>
                <p>Title: {title}</p>
            </div>
            <img src={url} alt={title}/>
        </div>
    );
};

export {Photo};