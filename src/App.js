import React from "react";
import "./App.css";
import { Routes, Route, Link} from 'react-router-dom';
import {Home, About, ContactUs} from './pages'


function App() {

  return (
    <div className="App">
      lorem 
      <nav><ul><li>
        <Link to='/'>Home</Link>    
        <Link to='/contactus'>ContactUs</Link>    
        <Link to='/about'>About</Link>    
      </li></ul></nav>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contactus' element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
