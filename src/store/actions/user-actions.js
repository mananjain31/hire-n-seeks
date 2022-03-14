import fetcher from '../../utils/fetcher';
import { userActions } from '../slices/user-slice'

export const loginUser = (formData) => {
  return async dispatch => {

    const {data, error} = await fetcher('/login', {
      method : 'POST',
      body : JSON.stringify(formData)
    });

    if(error) return console.error(error);

    dispatch(userActions.login(data.userData));

  }
}

export const logoutUser = (formData) => {
  return async dispatch => {

    const {data, error} = await fetcher('/logouts');

    if(error) return console.error(error);

    dispatch(userActions.logout());

  }
}