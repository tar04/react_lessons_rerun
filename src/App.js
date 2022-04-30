import {Route, Routes} from "react-router-dom"

import {CarsPage, Home, SingleCarPage} from "./pages";

function App() {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Home/>}>
                    <Route index element={<CarsPage/>}/>
                    <Route path={"cars/:id"} element={<SingleCarPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
