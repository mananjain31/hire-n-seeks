import { createSlice } from '@reduxjs/toolkit';

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
      state = {
        ...action.payload,
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