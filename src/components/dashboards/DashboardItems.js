import {TextareaStyle, LiStyle} from "./DashboardStyles.modal";

const DashboardItems = ({notes, deleteNote, changeNote}) => {

   return (
      notes.map((note) => {
         return (
            <LiStyle className="notes-item" key={note.id}>
               <div className="notes-body" id={note.id}>
                  <h2>{note.description}</h2>
                  <TextareaStyle defaultValue={note.text}></TextareaStyle>
                  <button onClick={(e) => changeNote(e)}>Change</button>
                  <button onClick={(e) => deleteNote(e)}>Delete</button>
               </div>
            </LiStyle>
         )
      })
   );
}

export default DashboardItems;
