import React from "react";
import "./App.css";
import { Routes, Route, Link} from 'react-router-dom';
import './globals/global-styles.scss'
import {LandingPage, LoginPage, UserProfilePage,PostingJobDetails, RegisterPage} from './pages'

function App() {
  // console.log(LandingPage);
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/login' element={<LoginPage/>}/>
        <Route exact path='/register' element={<RegisterPage/>}/>
        <Route exact path='/userprofile' element={<UserProfilePage/>}/>
        <Route exact path='/postingjobdetails' element={<PostingJobDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;