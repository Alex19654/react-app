import { useEffect } from "react";
import DashboardItems from "./DashboardItems";
import { axiosGet, axiosDelete, axiosChange } from "../../axios/axios";
import FormComponent from "../form/FormComponent";
import { useSelector, useDispatch } from "react-redux";
import { changeList, updateList } from "../../redux/actions/dashboard.actions";

const DashboardList = () => {

   //const [notesList, setnotesList] = useState(null);

   const dispatch = useDispatch();
   const notesList = useSelector(state => state.list.list);



   const deleteNote = (e) => {
      axiosDelete(e.target.parentNode.id);
      const changedNotes = notesList;
      //setnotesList(changedNotes.filter(item => item.id !== e.target.parentNode.id));
      dispatch(updateList([changedNotes, e]));
   }

   const changeNote = (e) => {
      axiosChange(e.target.parentNode.id, e.target.previousElementSibling.value);
   }

   useEffect(() => {
      axiosGet().then(data => dispatch(changeList(data)));
   }, []);
   
   return (
      <div>
         <FormComponent />
         {notesList ? <ul className="notes-list"><DashboardItems notes={notesList} deleteNote={deleteNote} changeNote={changeNote}/></ul> : <div>There are no notes for now...</div>}
      </div>
      
   )
};

export default DashboardList;