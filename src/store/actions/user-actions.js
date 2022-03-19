import fetcher from '../../utils/fetcher';
import { alertActions } from '../slices/alert-slice';
import { userActions } from '../slices/user-slice'

export const loginUser = (formData) => {
  return async dispatch => {
    
    dispatch(alertActions.openInfo("Veryfying Login credentials..."));

    const {data, error} = await fetcher('/login', {
      method : 'POST',
      body : JSON.stringify(formData)
    });

    if(error) return dispatch(alertActions.openError(error))

    dispatch(userActions.login(data.userData));
    dispatch(alertActions.openSuccess("Logged in Succesfully"));

  }
}

export const logoutUser = (formData) => {
  return async dispatch => {

    const {data, error} = await fetcher('/logouts');

    if(error) return dispatch(alertActions.openError(error))

    dispatch(userActions.logout());

  }
}