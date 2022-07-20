import "./App.css";
import Navebar from "./Shared/Navebar/Navebar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Footer from "./Shared/Navebar/Footer/Footer";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Admin_DTPS from "./Admin/Admin_DTPS";
import User_DTPS from "./User/User_DTPS";

function App() {
    // const img1 = img1
    return (
        <div>
            <Navebar />
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<Admin_DTPS />} />
                <Route path="/users" element={<User_DTPS />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
