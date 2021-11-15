import { useEffect } from "react";
import DashboardItems from "./DashboardItems";
import FormComponent from "../form/FormComponent";
import { useSelector, useDispatch } from "react-redux";
import { updateList } from "../../redux/actions/dashboard.actions";
import { axiosPut, axiosGet, axiosDelete } from "../../redux/thunk/app.thunk";
import { UlStyle } from "./DashboardStyles.modal";
import { ThemeContext } from "../theme/ThemeStyles";

const DashboardList = () => {


   const dispatch = useDispatch();
   const notesList = useSelector(state => state.list.list);



   const deleteNote = async (e) => {
      dispatch(axiosDelete(e.target.parentNode.id));
      const changedNotes = notesList;
      dispatch(updateList([changedNotes, e]));
   }

   const changeNote = (e) => {
      dispatch(axiosPut(e.target.parentNode.id, e.target.previousElementSibling.value));
      
   }

   useEffect(() => {
      dispatch(axiosGet());
   }, []);
   
   return (
      <ThemeContext.Consumer>
         {({theme}) => (
            <div className={theme}>
               <FormComponent />
               {notesList ? <UlStyle className="notes-list"><DashboardItems notes={notesList} deleteNote={deleteNote} changeNote={changeNote}/></UlStyle> : <div>There are no notes for now...</div>}
            </div>
         )}
      </ThemeContext.Consumer>
   )
};

export default DashboardList;