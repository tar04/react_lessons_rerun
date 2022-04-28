import React from 'react';

const User = ({user:{id,name}}) => {
    return (
        <div>
            {id}--{name}
        </div>
    );
};

export {User};