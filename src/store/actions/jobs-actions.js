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
  // console.log(formData);
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
      if(status === 500) return dispatch(alertActions.openError("Internal Server Error"))
      dispatch(alertActions.openError(error))
      return false;
    }
    dispatch(loadJobs())

    dispatch(alertActions.openSuccess("Posted Succesfully"));
    if ( successCallback ) successCallback();


    return true; 
  }
}

export const applyJob = (jobId, successCallback) => {
  return async dispatch => {
    dispatch(alertActions.openInfo("Applying for this Job..."));
    const {data, error, status} = await fetcher('/apply/'+jobId);
    if(error)
    {
      if(status === 500) return dispatch(alertActions.openError("Internal Server Error"))
      dispatch(alertActions.openError(error))
      return false;
    }
    dispatch(loadJobs())

    dispatch(alertActions.openSuccess("Applied Succesfully"));
    if ( successCallback ) successCallback();


    return true; 
  }

}

export const deleteJob = (jobId, successCallback) => {
  // console.log('Delete job');
  return async dispatch => {
    dispatch(alertActions.openInfo("Deleting this Job..."));
    const {data, error, status} = await fetcher('/deleteJob/'+jobId);
    if(error)
    {
      if(status === 500) return dispatch(alertActions.openError("Internal Server Error"))
      dispatch(alertActions.openError(error))
      return false;
    }
    dispatch(loadJobs())

    dispatch(alertActions.openSuccess("Deleted Succesfully"));
    if ( successCallback ) successCallback();


    return true; 
  }

}