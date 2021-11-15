import useFormValidate from "../../hooks/useFormValidation";
import formValidationRules from "../../validationRules/formValidationRules";
import { FormStyle, LabelStyle, ButtonStyle } from "./FormStyles.module";
import 'antd/dist/antd.css';

const FormRegistration = () => {

   const {values, errors, handleChange, handleSubmit} = useFormValidate(callback, formValidationRules);

   function callback() {
      console.log('No errors, submit callback called!');
    }

   return (
      <FormStyle>
         <form onSubmit={handleSubmit}>
            <div>
               <LabelStyle htmlFor="firstName">First Name</LabelStyle>
               <input type="text" id="firstName" value={values.firstName || ''} onChange={handleChange}/>
               {errors.firstName && (
                  <p className="form-field-error">{errors.firstName}</p>
               )}
            </div>
            <div>
               <LabelStyle htmlFor="lastName">Last Name</LabelStyle>
               <input type="text" id="lastName" value={values.lastName || ''} onChange={handleChange}/>
               {errors.lastName && (
                  <p className="form-field-error">{errors.lastName}</p>
               )}
            </div>
            <div>
               <LabelStyle htmlFor="emal">Email</LabelStyle>
               <input type="email" id="email" value={values.email || ''} onChange={handleChange}/>
               {errors.email && (
                  <p className="form-field-error">{errors.email}</p>
               )}
            </div>
            <div>
               <LabelStyle htmlFor="password">Password</LabelStyle>
               <input type="password" id="password" value={values.password || ''} onChange={handleChange}/>
               {errors.password && (
                  <p className="form-field-error">{errors.password}</p>
               )}
            </div>
            <div>
               <LabelStyle htmlFor="confirmPassword">Confirm Password</LabelStyle>
               <input type="password" id="confirmPassword" value={values.confirmPassword || ''} onChange={handleChange}/>
               {errors.confirmPassword && (
                  <p className="form-field-error">{errors.confirmPassword}</p>
               )}
            </div>
            
            <ButtonStyle type="submit" shape="round" size="large">Submit</ButtonStyle>
         </form>
      </FormStyle>
   )
}

export default FormRegistration;
