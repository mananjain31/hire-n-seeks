import React from "react";
import "./App.css";
import { Routes, Route, Link} from 'react-router-dom';
import './globals/global-styles.scss'
import {LandingPage, LoginPage} from './pages'
import { RegisterPage } from "./pages/login-register-pages/RegisterPage";
import { Alert, Slide, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "./store/slices/alert-slice";
import RequireAuth from "./pages/RequireAuth";
import { updateUserToLocalStorage } from "./store/slices/user-slice";

let firstRender = true;

function App() {

  const alert = useSelector(state => state.alert);
  const user = useSelector(state => state.user);

  React.useEffect(() => {
    updateUserToLocalStorage(user);
  }, [user]);

  const dispatch = useDispatch();
  const closeAlert = () => dispatch(alertActions.close())
  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/login' element={<LoginPage/>}/>
        <Route exact path='/register' element={<RegisterPage/>}/>
        <Route element={<RequireAuth forRecruiter forSeeker/>}>
          <Route path='/protected' element={<p>Protected Route</p>}/>
        </Route>
      </Routes>

      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        TransitionComponent={Slide}
        onClose={closeAlert}
      >
        <Alert variant="filled" onClose={closeAlert} elevation={10} severity={alert.severity} key={Math.random()}>
          {alert.message}
        </Alert>
      </Snackbar>

    </div>
  );
}

export default App;