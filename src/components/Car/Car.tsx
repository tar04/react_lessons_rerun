import React, {FC} from "react";

import {ICar} from "../../interfaces";
import {Link} from "react-router-dom";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car: {model, year, price, id}}) => {
    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <Link to={`${id}`}>
                <button>Get Details</button>
            </Link>
        </div>
    );
};

export {Car};