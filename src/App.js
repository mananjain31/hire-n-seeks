import React from "react";
import "./App.css";
import { Routes, Route, Link} from 'react-router-dom';
import './globals/global-styles.scss'
import {LandingPage, LoginPage} from './pages'
import { RegisterPage } from "./pages/login-register-pages/RegisterPage";
import { Alert, Slide, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "./store/slices/alert-slice";

function App() {
  // console.log(LandingPage);
  const alert = useSelector(state => state.alert);
  console.log(alert);
  const dispatch = useDispatch();
  const closeAlert = () => dispatch(alertActions.close())
  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/login' element={<LoginPage/>}/>
        <Route exact path='/register' element={<RegisterPage/>}/>
      </Routes>

      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        TransitionComponent={Slide}
        onClose={closeAlert}
      >
        <Alert variant="filled" onClose={closeAlert} elevation={10} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>

    </div>
  );
}

export default App;