import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";


export const RoutesCustom = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                </Routes>
            </Router>
        </div>
        
    );   
}