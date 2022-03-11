import React from "react";
import "./App.css";
import { Routes, Route, Link} from 'react-router-dom';
import './globals/global-styles.scss'
import {LandingPage, LoginPage} from './pages'

function App() {
  // console.log(LandingPage);
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
