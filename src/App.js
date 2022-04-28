import {CatForm, Cats, DogForm, Dogs} from "./components";

function App() {
    return (
        <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
            <div>
                <CatForm/>
                <Cats/>
            </div>
            <div>
                <DogForm/>
                <Dogs/>
            </div>
        </div>
    );
}

export default App;
