import { createSlice } from '@reduxjs/toolkit';
import arrayFromString from '../../utils/arrayFromString';

const initialState = {
  loggedIn : false,
  is_recruiter : false,
}

const getInitialStateFromLocalStorage = () => {
  let user = localStorage.getItem('user')
  if(user) return JSON.parse(user);
  return initialState;
}

export const updateUserToLocalStorage = user => {
  localStorage.setItem('user', JSON.stringify(user))
}

const userSlice = createSlice({
  name : 'user',
  initialState : getInitialStateFromLocalStorage(),
  reducers : {
    logout(state)  {
      state = initialState
      return state;
    },
    login(state, action)  {
      let skills = arrayFromString(action.payload.skills);
      let projects = arrayFromString(action.payload.projects);
      state = {
        ...action.payload,
        skills,
        projects,
        loggedIn : true,
      }
      return state;
    },
    set(state, action) {
      return action.payload
    }
  }
})

export const userActions = userSlice.actions;
export default userSlice;