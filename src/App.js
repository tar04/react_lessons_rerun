import {Route, Routes} from "react-router-dom";

import {HomePage, PostsPage, UsersPage,NotFoundPage} from "./pages";
import "./App.css";

export function App() {
    return (
        <div className={"main"}>
            <Routes>
                <Route path={"/"} element={<HomePage/>}>
                    <Route path={"users"} element={<UsersPage/>}/>
                    <Route path={"posts"} element={<PostsPage/>}/>
                </Route>
                <Route path={"*"} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
