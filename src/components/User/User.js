import React from "react";

const User = ({user,setChosenUser,setPosts}) => {

    const {id,name}=user;

    const onclick=()=>{
        setChosenUser(user);
        setPosts(null);
    }

    return (
        <div>
            <h3>{id}) {name}</h3>
            <button onClick={onclick}>Details</button>
        </div>
    );
};

export {User};