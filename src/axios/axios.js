const axios = require('axios');
const baseUrl = "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/";

const axiosGet = async () => {
   return await axios.get(baseUrl)
   .then(response => response.data)
   .catch(error => console.log(error));
} 

const axiosPost = (description, text) => {
   axios.post(baseUrl, {
      description: description,
      text: text
   }) 
   .catch(function (error) {
      console.log(error);
   });
} 

const axiosDelete = (id) => {
   const itemUrl = baseUrl + id;
   axios.delete(itemUrl)
   .then(response => console.log(response))
   .catch(error => console.log(error));
} 

const axiosChange = (id, text) => {
   const itemUrl = baseUrl + id;
   axios.put(itemUrl, {text: text})
   .catch(error => console.log(error));
}


export {axiosGet, axiosPost, axiosDelete, axiosChange};