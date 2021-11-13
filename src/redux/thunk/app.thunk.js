import { getItemsFetchRequest,
         getItemsFetchSuccess,
         getItemsAxiosRequest,
         postItemsAxiosRequest,
         putItemsAxiosRequest,
         changeList,
         deleteItemsAxiosRequest
} from "../actions/dashboard.actions";

const axios = require('axios');
const baseUrl = "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/";


const fetchItems = (url) => {
   return (dispatch) => {
      dispatch(getItemsFetchRequest);
      
      const encodeURI = window.encodeURI('https://jsonplaceholder.typicode.com/' + url);
      fetch(encodeURI)
         .then(response => response.json())
         .then(data => dispatch(getItemsFetchSuccess(data)))
         .catch(error => console.error(error))
   }
};

const axiosGet = () => {
   return (dispatch) => {
      dispatch(getItemsAxiosRequest);

      axios.get(baseUrl)
         .then(response => dispatch(changeList(response.data)))
         .catch(error => console.log(error));
   }
};

const axiosPost = (description, text) => {
   return (dispatch) => {
      dispatch(postItemsAxiosRequest);

      axios.post(baseUrl, {
         description: description,
         text: text
      }) 
      .catch(function (error) {
         console.log(error);
      });
   }
}

const axiosDelete = (id) => {
   return (dispatch) => {
      const itemUrl = baseUrl + id;
      dispatch(deleteItemsAxiosRequest);

      axios.delete(itemUrl)
      .then(response => console.log(response))
      .catch(error => console.log(error));

   }
}

const axiosPut = (id, text) => {
   return (dispatch) => {
      dispatch(putItemsAxiosRequest);

      const itemUrl = baseUrl + id;
      axios.put(itemUrl, {text: text})
         .catch(error => console.log(error));
   }
}


 export {
    fetchItems,
    axiosGet,
    axiosPost,
    axiosPut,
    axiosDelete
};