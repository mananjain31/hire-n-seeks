import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function RequireAuth({ forRecruiter, forSeeker, redirectLoggedIn }){
  const location = useLocation();
  const user = useSelector(state => state.user);

  //console.log(location);
  if(user.loggedIn && typeof redirectLoggedIn === "string")  
     return <Navigate to={redirectLoggedIn} state={{ from: location }} replace />;

  if(!user.loggedIn && !redirectLoggedIn )
    return <Navigate to="/login" state={{ from: location }} replace />;


  // console.log(forRecruiter && forSeeker
  //   ,  (forRecruiter && user.is_recruiter)
  //   ,  (forSeeker && !user.is_recruiter));


  if(
    !forRecruiter && !forSeeker
    ||  forRecruiter && forSeeker
    ||  (forRecruiter && user.is_recruiter)
    ||  (forSeeker && !user.is_recruiter)
  ) return <Outlet/>

  return <Navigate to="/unauthorized" state={{ from: location }} replace />

}