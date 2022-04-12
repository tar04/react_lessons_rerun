import {CarForm, Cars} from "./components";
import {useState} from "react";

function App() {

    const [newCar, setNewCar] = useState();

    return (
        <div>
            <CarForm setNewCar={setNewCar}/>
            <hr/>
            <Cars newCar={newCar}/>
        </div>
    );
}

export default App;
