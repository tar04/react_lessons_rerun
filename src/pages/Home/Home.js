import React from "react";
import {Outlet} from "react-router-dom"

import {CarForm} from "../../components";

const Home = () => {
    return (
        <div>
            <CarForm/>
            <Outlet/>
        </div>
    );
};

export {Home};