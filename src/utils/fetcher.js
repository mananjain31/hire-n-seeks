export default async function fetcher (...args) {

  const returnValue = {
    status : null,
    data : null,
    error : null,
  };

  try {
    const response = await fetch(...args);
    returnValue.status = response; 
    const data = await response.json();
    if( data.success === false ) throw data.error;
    returnValue.data = data;
  }
  catch(error) {
    returnValue.error = error;
  }

  return returnValue;
  
}