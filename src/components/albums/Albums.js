import List from "../list/List";
import { useEffect } from "react";
import { ThemeContext } from "../theme/ThemeStyles";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../redux/thunk/app.thunk";

const Albums = () => {

   const dispatch = useDispatch();
   const { loading, items, error } = useSelector((state) => state.albums);

   const getItemsHandler = () => {
      dispatch(fetchItems("albums"));
   }

   useEffect(() => {
      getItemsHandler();
   }, []);

   if (loading) {
      return <p>Loading...</p>;
   }

   if (error) {
      return <p>{error}</p>;
   }

   return (
      <ThemeContext.Consumer>
         {({theme}) => (
            <div className={theme}>
               <h2>Albums</h2>
               {items ? <List items={items} /> : <div>Loading...</div>}
            </div>
         )}
      </ThemeContext.Consumer>
   )
}

export default Albums;