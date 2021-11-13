import { useDispatch, useSelector } from "react-redux";
import { changeDescription, changeText } from "../../redux/actions/dashboard.actions";
import { changeList } from "../../redux/actions/dashboard.actions";
import { axiosGet, axiosPost } from "../../redux/thunk/app.thunk";


const FormComponent = () => {

   const dispatch = useDispatch();
   const description = useSelector(state => state.post.description);
   const text = useSelector(state => state.post.text);

   const getItemsHandler = () => {
      dispatch(axiosGet());
   };

   const postItemsHandler = () => {
      dispatch(axiosPost(description, text));
   }

   const descChangeHandler = (value) => {
      dispatch(changeDescription(value));
   };

   const textChangeHandler = (value) => {
      dispatch(changeText(value));
   };

   const handleSubmit =  (e) => {
      e.preventDefault();
      postItemsHandler();
      getItemsHandler();
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