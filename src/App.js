import {Comments, Posts, Users} from "./components";
import "./App.css";

function App() {
    return (
        <div>
            <Users/>
            <hr/>
            <Posts/>
            <hr/>
            <Comments/>
        </div>
    );
}

export default App;
