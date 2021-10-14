import { useState, useEffect } from "react";
import DashboardItems from "./DashboardItems";
import { axiosGet, axiosDelete, axiosChange } from "../../axios/axios";
import FormComponent from "../form/FormComponent";

const DashboardList = () => {

   const [notesList, setnotesList] = useState(null);

   const deleteNote = (e) => {
      axiosDelete(e.target.parentNode.id);
      const changedNotes = notesList;
      setnotesList(changedNotes.filter(item => item.id !== e.target.parentNode.id));
   }

   const changeNote = (e) => {
      console.log(e.target.previousElementSibling.value);
      axiosChange(e.target.parentNode.id, e.target.previousElementSibling.value);
      //const upadtedNotes = notesList;
      //setnotesList(upadtedNotes.filter(item => item.id !== e.target.parentNode.id));
   }

   useEffect(() => {
      axiosGet().then(data => setnotesList(data));
   }, []);
   
   return (
      <div>
         <FormComponent updateList={setnotesList} notes={notesList}/>
         {notesList ? <ul className="notes-list"><DashboardItems notes={notesList} deleteNote={deleteNote} changeNote={changeNote}/></ul> : <div>There are no notes for now...</div>}
      </div>
      
   )
};

export default DashboardList;