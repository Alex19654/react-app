import useFormValidate from "../../hooks/useFormValidation";
import formValidationRules from "../../validationRules/formValidationRules";

const FormRegistration = () => {

   const {values, errors, handleChange, handleSubmit} = useFormValidate(callback, formValidationRules);

   function callback() {
      console.log('No errors, submit callback called!');
    }

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" value={values.firstName || ''} onChange={handleChange}/>
            {errors.firstName && (
               <p className="form-field-error">{errors.firstName}</p>
            )}
         </div>
         <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" value={values.lastName || ''} onChange={handleChange}/>
            {errors.lastName && (
               <p className="form-field-error">{errors.lastName}</p>
            )}
         </div>
         <div>
            <label htmlFor="emal">Email</label>
            <input type="email" id="email" value={values.email || ''} onChange={handleChange}/>
            {errors.email && (
               <p className="form-field-error">{errors.email}</p>
            )}
         </div>
         <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={values.password || ''} onChange={handleChange}/>
            {errors.password && (
               <p className="form-field-error">{errors.password}</p>
            )}
         </div>
         <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" value={values.confirmPassword || ''} onChange={handleChange}/>
            {errors.confirmPassword && (
               <p className="form-field-error">{errors.confirmPassword}</p>
            )}
         </div>
         
         <button type="submit">Submit</button>
      </form>
   )
}

export default FormRegistration;
