import { ThemeContext } from "../theme/ThemeStyles";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../redux/thunk/app.thunk";
import { useEffect } from "react";
import List from "../list/List";

const item = "users";

const Users = () => {

   const dispatch = useDispatch();
   const { loading, items, error } = useSelector((state) => state.albums);

   const getItemsHandler = () => {
      dispatch(fetchItems("users"));
   }


   useEffect(() => {
      getItemsHandler();
   }, []);


      return (
         <ThemeContext.Consumer>
            {({theme}) => (
               <div className={theme}>
                  <h2>Users</h2>
                  {items ? <List items={items} /> : <div>Loading...</div>}
               </div>
            )}
         </ThemeContext.Consumer>
      )
}

export default Users;