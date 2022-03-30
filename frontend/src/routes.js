import React from "react";
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import NewAnimals from "./pages/NewAnimal";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Logon/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/animals/new" element={<NewAnimals/>}/>
            </Routes>
        </BrowserRouter>
    );
}