import { useState, useEffect } from 'react';

function useFormValidate(callback, validate) {
   const [values, setValues] = useState({});
   const [errors, setErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);

   useEffect( () => {
      if(Object.keys(errors).length === 0 && isSubmit) {
         callback();
      }
   }, [errors]);

   const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validate(values));
      if(Object.keys(errors).length === 0) {
         setIsSubmit(true);
      }
   };

   const handleChange = (e) => {
      setValues(values => ({ ...values, [e.target.id]: e.target.value}));
   }

   return {
      handleChange,
      handleSubmit,
      values,
      errors
   }
}

export default useFormValidate;