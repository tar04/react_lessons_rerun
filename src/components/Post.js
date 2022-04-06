import React from "react";

const Post = ({post: {userId, id, title, body}}) => {
    return (
        <div>
            <h5>User with id {userId} posts:</h5>
            <h3>{id}) {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export {Post};

