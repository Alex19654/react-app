
function validate(values) {
   let errors = {};

   if(!(values.firstName.length >= 2)) {
      errors.firstName = "First name should contain more at least 2 symbols";
   }

   if(!(values.lastName.length >= 2)) {
      errors.lastName = "Last name should contain more at least 2 symbols";
   }

   if(!(values.email.length >= 2)) {
      errors.email = "Email address should contain at least 2 symbols";
   } else if(!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
   }

   if(!values.password.match(/^[A-Za-z]\w{6,10}$/)) {
      errors.password = "Password should contain 6-10 symbols, 1 capital letter and 1 digit";
   }

   if(!(values.password === values.confirmPassword)) {
      errors.confirmPassword = "Passwords are not identical";
   }
   

   return errors;
}

export default validate;