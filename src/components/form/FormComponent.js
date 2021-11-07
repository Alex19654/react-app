import { axiosPost, axiosGet } from "../../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import { changeDescription, changeText } from "../../redux/actions/dashboard.actions";
import { changeList } from "../../redux/actions/dashboard.actions";


const FormComponent = () => {

   const dispatch = useDispatch();
   const description = useSelector(state => state.description.description);
   const text = useSelector(state => state.text.text);

   const descChangeHandler = (value) => {
      dispatch(changeDescription(value));
   };

   const textChangeHandler = (value) => {
      dispatch(changeText(value));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      await axiosPost(description, text);
      await axiosGet().then(data => dispatch(changeList(data)));
   }

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" value={description} onChange={(e) => descChangeHandler(e.target.value)}/>
         </div>
         <div>
            <label htmlFor="text">Text</label>
            <input type="text" id="text" value={text} onChange={(e) => textChangeHandler(e.target.value)}/>
         </div>
         <button type="submit">Submit</button>
      </form>
   )
}

export default FormComponent;