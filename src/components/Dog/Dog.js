import React from "react";

const Dog = ({dog:{name}}) => {
    return (
        <div>
            {name} <button>Delete</button>
        </div>
    );
};

export {Dog};