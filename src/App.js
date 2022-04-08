import {useState} from "react";

import {Posts, UserDetails, Users} from "./components";
import {userService} from "./services";
import "./App.css";

function App() {

    const [chosenUser, setChosenUser] = useState(null);

    const [posts, setPosts] = useState(null);

    const getPosts = (id) => {
        userService.getUsersPosts(id).then(posts => setPosts(posts));
    };

    return (
        <div>
            <div className={"allUsers"}>
                <Users setChosenUser={setChosenUser} setPosts={setPosts}/>
                {chosenUser && <UserDetails chosenUser={chosenUser} getPosts={getPosts} />}
            </div>
            <Posts  posts={posts}/>
        </div>
    );
}

export default App;
