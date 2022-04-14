import React, {useEffect, useState} from "react";
import {Outlet, useParams} from "react-router-dom";

import {userService} from "../../services";
import {Album} from "../Album/Album";
import "./AlbumsOfUser.css";

const AlbumsOfUser = () => {

    const {id} = useParams();

    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        userService.getAlbumsByUserId(id).then(albums => setAlbums(albums))
    }, []);

    return (
        <div className={"albumsAndPhotos"}>
            <div className={"albums"}>{albums && albums.map(album => <Album key={album.id} album={album}/>)}</div>
            <Outlet/>
        </div>
    );
};

export {AlbumsOfUser};