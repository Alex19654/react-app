
const DashboardItems = ({notes, deleteNote, changeNote}) => {

   return (
      notes.map((note) => {
         return (
            <li className="notes-item" key={note.id}>
               <div className="notes-body" id={note.id}>
                  <h2>{note.description}</h2>
                  <textarea defaultValue={note.text}></textarea>
                  <button onClick={(e) => changeNote(e)}>Change</button>
                  <button onClick={(e) => deleteNote(e)}>Delete</button>
               </div>
            </li>
         )
      })
   );
}

export default DashboardItems;
