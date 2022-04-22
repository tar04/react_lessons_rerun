import React from "react";

const Cat = ({cat:{name}}) => {
    return (
        <div>
            {name} <button>Delete</button>
        </div>
    );
};

export {Cat};