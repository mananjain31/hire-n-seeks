import { isValidContactNumber, isValidEmail, isValidUserName } from "./form-fileld-validations";
export default function validateLoginForm(formData){
  
  const {userId, password} = formData;
  const returnValue = {errors : {}, data : {userId, password}, isValid : true}

  const addError = error => {
    returnValue.isValid = false;
    returnValue.errors = {...returnValue.errors, ...error};
  }

  if(!userId?.trim()) addError({userId : 'This field is required'});
  else {
    if(isValidEmail(userId)) returnValue.data.email = userId;
    else if(isValidContactNumber(userId)) returnValue.data.contactNumber = userId;
    else if(isValidUserName(userId)) returnValue.data.userName = userId;
    else addError({userId : 'Invalid email, contact number or username syntax'});
  }
  if(!password?.trim()) addError({password : 'This field is required'});

  return returnValue;
}