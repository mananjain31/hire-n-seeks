import { useSelector } from 'react-redux';
import fetcher from '../../utils/fetcher';
import { alertActions } from '../slices/alert-slice';
import { jobsActions } from '../slices/jobs-slice';

export const loadJobs = (formData) => {
    return async dispatch => {
      // dispatch(alertActions.openInfo("Fetching Jobs..."));
      const {data, error, status} = await fetcher('/jobs');
  
      if(error) 
      {
        if(status === 500) return dispatch(alertActions.openError("Error fetching jobs"))
        dispatch(alertActions.openError(error))
        return false;
      }

      dispatch(jobsActions.setJobList(data));
  
      // dispatch(alertActions.openSuccess("Jobs fetched Succesfully"));
  
      return true; 
    }
  }
  export const postJob = (formData, successCallback) => {
    return async dispatch => {
      dispatch(alertActions.openInfo("Posting Jobs..."));
      const {data, error, status} = await fetcher('/post-for-recruitment', {
        method : "POST",
        body : JSON.stringify(formData),
        headers : {
          'Content-Type' : 'application/json',
        }  
      });
  
      if(error) 
      {
        if(status === 500) return dispatch(alertActions.openError("Error fetching jobs"))
        dispatch(alertActions.openError(error))
        return false;
      }
      dispatch(jobsActions.setJobList(data.data));
  
      dispatch(alertActions.openSuccess("Posted Succesfully"));
      successCallback();

  
      return true; 
    }
  }
