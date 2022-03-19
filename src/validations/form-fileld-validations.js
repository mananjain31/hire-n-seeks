export const isValidEmail = value =>  (
    value && 

    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      .test(value)

);

export const isValidContactNumber = value => (
  value && 

  /^\d{10}$/   
    .test(value)

);

export const isValidUserName = value => (
  value && 

  /^[a-zA-Z]/       .test(value) &&
  /\w{3}/           .test(value) &&
  !/[^a-zA-Z0-9]/   .test(value)
  
)