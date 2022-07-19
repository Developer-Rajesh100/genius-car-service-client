import "./App.css";
import Navebar from "./Shared/Navebar/Navebar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

function App() {
    // const img1 = img1
    return (
        <div>
            <Navebar />
            <Routes>
                <Route path="/" element={<Home></Home>} />
            </Routes>
        </div>
    );
}

export default App;
