import Parser from 'html-react-parser'; // Connect parser to convert string into JSX 
import { TableStyle } from './ListStyle.modal';

const List = (props) => {

   /* Get keys of the object what become header names of the table
      and will be used for calculating how many cells do we need in each row */
   const keys = Object.keys(props.items[0]);

   /* Create header of the table */
   const headerIterator = (items) => {
      let htmlHeaderMarkup = '';
      for(let i = 0; i < keys.length; i += 1) {
         htmlHeaderMarkup += `<th>${items[i]}</th>`;
      }
      return `<tr>${htmlHeaderMarkup}</tr>`;
   }

   /* Create body of the table */
   const bodyIterator = (items) => {
      let htmlBodyMarkup = ''; // variable for final body markup, what is ready for render
      let itemsLength = items.length; // calculate how many rows of table body we need to create
      let itemsCounter = 0; // counter for "while" cycle, for creating row by row of the table
      
      while (itemsCounter < itemsLength) {
         let htmlTableElements = '';

         for(let i = 0; i < keys.length; i++) {

            /* Check if item is not an object, place into the table cell field value
               Otherwise, place into the table cell first field value of the object */
            if(typeof items[itemsCounter][keys[i]] !== "object") {
               htmlTableElements += `<td>${items[itemsCounter][keys[i]]}</td>`;
            } else {
               let object = items[itemsCounter][keys[i]];
               let firstObjField = object[Object.keys(object)[0]]; // getting value of the first field
               htmlTableElements += `<td>${firstObjField}</td>`;
            }
         }

         htmlBodyMarkup += `<tr>${htmlTableElements}</tr>`;
         itemsCounter += 1;
      }
      return htmlBodyMarkup;
   }


   return (  
      <div>
         <TableStyle>
               {Parser(headerIterator(keys))}
               {Parser(bodyIterator(props.items))}
         </TableStyle>
      </div> 
   )
}

export default List;