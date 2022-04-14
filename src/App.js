import {Route, Routes} from "react-router-dom";

import {HomePage, PostsPage, UsersPage, NotFoundPage} from "./pages";
import {AlbumsOfUser, CommentsOfPost, Photos, PostDetails, PostsOfUser, UserDetails} from "./components";
import "./App.css";

export function App() {
    return (
        <div className={"main"}>
            <Routes>
                <Route path={"/"} element={<HomePage/>}>
                    <Route path={"users"} element={<UsersPage/>}>
                        <Route path={":id"} element={<UserDetails/>}>
                            <Route path={"posts"} element={<PostsOfUser/>}/>
                        </Route>
                        <Route path={":id/albums"} element={<AlbumsOfUser/>}>
                            <Route path={":albumId/photos"} element={<Photos/>}/>
                        </Route>
                    </Route>
                    <Route path={"posts"} element={<PostsPage/>}>
                        <Route path={":id"} element={<PostDetails/>}>
                            <Route path={"comments"} element={<CommentsOfPost/>}/>
                        </Route>
                    </Route>
                </Route>
                <Route path={"*"} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
