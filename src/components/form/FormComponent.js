import { useState } from "react";
import { axiosPost, axiosGet } from "../../axios/axios";

const FormComponent = ({updateList, notes}) => {
   const [description, setDescription] = useState('');
   const [text, setText] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      await axiosPost(description, text);
      await axiosGet().then(data => updateList(data));
   }

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
         </div>
         <div>
            <label htmlFor="text">Text</label>
            <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)}/>
         </div>
         <button type="submit">Submit</button>
      </form>
   )
}

export default FormComponent;