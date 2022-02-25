import React from "react";
import "./App.css";
import { Routes, Route, Link} from 'react-router-dom';
import {LandingPage} from './pages'


function App() {
  // console.log(LandingPage);
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
