import React from "react";
import "./App.css";
import { Routes, Route, Link} from 'react-router-dom';
import './globals/global-styles.scss'
import {LandingPage, LoginPage,  RegisterPage,  UserProfilePage,PostingJobDetails,JobsPage, PostedJobsPage, AppliedJobsPage, JobViewPage, ViewApplicationsPage} from './pages'
import { Alert, Slide, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "./store/slices/alert-slice";
import RequireAuth from "./pages/RequireAuth";
import { updateUserToLocalStorage } from "./store/slices/user-slice";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@mui/system";
import { UserPortfolioPage } from "./pages/userportfolio/UserPortfolioPage";

const theme = createTheme({
  palette: {
    primary: {
      main: '#8c52ff',
    },
    // secondary: {
    //   main: '#edf2ff',
    // },
  },
});

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
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* 
        for protected routes use Route like this : 
        -----------
          <Route element={<RequireAuth forRecruiter forSeeker/>}>
            <Route path='/protected' element={<p>Protected Route Content</p>}/>
          </Route>
        -----------
          <Route element={<RequireAuth redirectLoggedIn="/jobs"/>}>
            <Route exact path='/' element={<LandingPage/>}/>
            <Route exact path='/login' element={<LoginPage/>}/>
            <Route exact path='/register' element={<RegisterPage/>}/>
          </Route>
        -----------
        RequireAuth props :
        - forRecruiter (boolean)
        - forSeeker (boolean)
        - restrictLoggedIn (boolean)
      */}
      <Routes>

        {/* <Route element={<RequireAuth redirectLoggedIn="/jobs"/>}>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/register' element={<RegisterPage/>}/>
        </Route> */}
        <Route element={<RequireAuth redirectLoggedIn="/jobs"/>}>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/register' element={<RegisterPage/>}/>
        </Route>

        {/* for both roles */}
        <Route element={<RequireAuth forRecruiter forSeeker/>}>
          <Route path='/jobs' element={<JobsPage/>}/>
          <Route path='/job/:jobId' element={<JobViewPage/>}/>
          <Route exact path='/userprofile' element={<UserProfilePage/>}/>
          <Route exact path='/userportfolio/:slug' element={<UserPortfolioPage/>}/>
        </Route>
        
        {/* for recruiter roles */}
        <Route element={<RequireAuth forRecruiter/>}>
          <Route exact path='/postingjobdetails' element={<PostingJobDetails/>}/>
          <Route exact path='/postedjobs' element={<PostedJobsPage/>}/>
          <Route exact path='/viewapplications/:jobId' element={<ViewApplicationsPage/>}/>
        </Route>

        {/* for seeker roles */}
        <Route element={<RequireAuth forSeeker/>}>
          <Route exact path='/appliedjobs' element={<AppliedJobsPage/>}/>
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
    </ThemeProvider>
  );
}

export default App;