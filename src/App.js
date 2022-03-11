import React from "react";
import "./App.css";
import { Routes, Route, Link} from 'react-router-dom';
import './globals/global-styles.scss'
import {LandingPage, LoginPage} from './pages'
import { RegisterPage } from "./pages/login-register-pages/RegisterPage";

function App() {
  // console.log(LandingPage);
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/login' element={<LoginPage/>}/>
        <Route exact path='/register' element={<RegisterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;