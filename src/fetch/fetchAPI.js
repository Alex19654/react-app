export const fetchItems = (items) => {
   const encodeURI = window.encodeURI('https://jsonplaceholder.typicode.com/' + items);
   return fetch(encodeURI)
       .then(response => response.json())
       .catch(error => console.error(error));
} 

