import fetcher from '../../utils/fetcher';
import { alertActions } from '../slices/alert-slice';
import { userActions } from '../slices/user-slice'

export const loginUser = (formData) => {
  return async dispatch => {
    
    dispatch(alertActions.openInfo("Veryfying Login credentials..."));

    const {data, error, status} = await fetcher('/login', {
      method : 'POST',
      body : JSON.stringify(formData)
    });

    if(error) 
    {
      if(status === 500) return dispatch(alertActions.openError("Internal Server Error"))
      return dispatch(alertActions.openError(error))
    }

    dispatch(userActions.login(data.userData));
    dispatch(alertActions.openSuccess("Logged in Succesfully"));

  }
}

export const registerUser = (formData) => {
  return async dispatch => {
    
    dispatch(alertActions.openInfo("Processing your request..."));

    const {data, error, status} = await fetcher('/signup', {
      method : 'POST',
      body : JSON.stringify(formData)
    });

    if(error) 
    {
      if(status === 500) return dispatch(alertActions.openError("Internal Server Error"))
      return dispatch(alertActions.openError(error))
    }

    console.log('Register data : ', data.userData);
    // dispatch(userActions.login(data.userData));
    dispatch(alertActions.openSuccess("Registered Succesfully"));

  }
}

export const logoutUser = (formData) => {
  return async dispatch => {

    const {data, error, status} = await fetcher('/logouts');

    if(error) 
    {
      if(status === 500) return dispatch(alertActions.openError("Internal Server Error"))
      return dispatch(alertActions.openError(error))
    }

    dispatch(userActions.logout());

  }
}