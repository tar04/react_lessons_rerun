import React from "react";

const Comment = ({comment: {id, name, email, body}}) => {
    return (
        <div>
            <h5>{id}) <i>{name}</i> ({email}) writes:</h5>
            <p>{body}</p>
        </div>
    );
};

export {Comment};