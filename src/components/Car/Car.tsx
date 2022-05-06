import React, {FC} from "react";
import {ICar} from "../../interfaces";
import {Link} from "react-router-dom";

interface IProps{
    car:ICar;
}

const Car: FC<IProps> = ({car:{id,price,year,model}}) => {
    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <Link to={`${id}`}>
                <button>Get details</button>
            </Link>
        </div>
    );
};

export {Car};