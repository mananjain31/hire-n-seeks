import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn : false,
  is_recruiter : false,
}

const userSlice = createSlice({
  name : 'user',
  initialState,
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
    }  
  }
})

export const userActions = userSlice.actions;
export default userSlice;