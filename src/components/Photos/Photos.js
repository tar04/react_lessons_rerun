import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {Photo} from "../Photo/Photo";
import {albumService} from "../../services";
import "./Photos.css";

const Photos = () => {

    const [photos, setPhotos] = useState(null);

    const {albumId: id} = useParams();

    useEffect(() => {
        albumService.getPhotosByAlbumId(id).then(photos => setPhotos(photos))
    }, [id]);

    return (
        <div className={"photos"}>
            {photos ? photos.map(photo => <Photo key={photo.id} photo={photo}/>) :
                <h1 style={{color: "white"}}>Loading...</h1>}
        </div>
    );
};

export {Photos};