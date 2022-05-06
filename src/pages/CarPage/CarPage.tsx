import React, {FC} from "react";
import {Outlet} from "react-router-dom";

import {CarForm, Cars} from "../../components";
import "./CarPage.css";

const CarPage: FC = () => {
    return (
        <div className={"wrap"}>
            <CarForm/>
            <Outlet/>
            <Cars/>
        </div>
    );
};

export {CarPage};