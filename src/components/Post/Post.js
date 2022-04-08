import React from "react";

const Post = ({post:{id,title,body}}) => {
    return (
        <div>
            <h4>{id}) {title}</h4>
            <p>{body}</p>
        </div>
    );
};

export {Post};