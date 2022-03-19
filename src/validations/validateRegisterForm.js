import { isValidContactNumber, isValidEmail, isValidUserName } from "./form-fileld-validations";
export default function validateRegisterForm(formData){
  
  const {
    userName,
    email,
    contactNumber,
    password,
    confirmPassword,
    firstName,
    lastName,
  } = formData;
  const returnValue = {errors : {}, data : formData, isValid : true}

  const addError = error => {
    returnValue.isValid = false;
    returnValue.errors = {...returnValue.errors, ...error};
  }

  for(const name in formData) {
    const value = formData[name];
    if(!value?.trim()) addError({[name] : 'This field is required'});
  }
  
  
  if(!isValidUserName(userName)) addError({userName : 'must start with alphabets, with minimum size of 3 and can have numbers'});
  if(!isValidEmail(email)) addError({email : 'invalid email format'});
  if(!isValidContactNumber(contactNumber)) addError({contactNumber : 'must be a 10 digit number'});
  if(!returnValue.errors.password && password !== confirmPassword) addError({confirmPassword : 'password mismatch'});

  return returnValue;
}