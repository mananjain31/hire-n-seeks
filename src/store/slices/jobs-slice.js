import { createSlice } from '@reduxjs/toolkit';
import arrayFromString from '../../utils/arrayFromString';

const initialState = {
    jobList : [],
    selectedJob : null,
}

const jobsSlice = createSlice({
  name : 'jobs',
  initialState : initialState,
  reducers : {
    selectedJob(state, action) {
      state.selectedJob = action.payload;
    },
    setJobList(state, action) {
      state.jobList = action.payload?.map(job =>  ({
        ...job,
        reqSkill : arrayFromString(job.reqSkill)
      }));
    },  
  }
})

export const jobsActions = jobsSlice.actions;
export default jobsSlice;