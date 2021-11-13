import { setDescription, 
         setText, 
         setList, 
         modifyList, 
         GET_ITEMS_FETCH_REQUEST, 
         GET_ITEMS_FETCH_SUCCESS, 
         GET_ITEMS_FETCH_FAILURE,
         GET_ITEMS_AXIOS_REQUEST,
         DELETE_ITEMS_AXIOS_REQUEST,
         POST_ITEMS_AXIOS_REQUEST,
         PUT_ITEMS_AXIOS_REQUEST
} from "../constants/dashboard.constants";

const changeDescription = (payload) => ({
   type: setDescription,
   payload
});

const changeText = (payload) => ({
   type: setText,
   payload
});

const changeList = (payload) => ({
   type: setList,
   payload
});

const updateList = (payload) => ({
   type: modifyList,
   payload
});

const getItemsFetchRequest = () => ({
   type: GET_ITEMS_FETCH_REQUEST
});

const getItemsFetchSuccess = (payload) => ({
   type: GET_ITEMS_FETCH_SUCCESS,
   payload
});

const getItemsFetchFailure = (payload) => ({
   type: GET_ITEMS_FETCH_FAILURE,
   payload
});

const getItemsAxiosRequest = () => ({
   type: GET_ITEMS_AXIOS_REQUEST
});

const postItemsAxiosRequest = (payload) => ({
   type: POST_ITEMS_AXIOS_REQUEST,
   payload
});

const putItemsAxiosRequest = (payload) => ({
   type: PUT_ITEMS_AXIOS_REQUEST,
   payload
});

const deleteItemsAxiosRequest = (payload) => ({
   type: DELETE_ITEMS_AXIOS_REQUEST,
   payload
});



export {
   changeDescription, 
   changeText, 
   changeList, 
   updateList, 
   getItemsFetchRequest, 
   getItemsFetchSuccess, 
   getItemsFetchFailure,
   getItemsAxiosRequest,
   postItemsAxiosRequest,
   putItemsAxiosRequest,
   deleteItemsAxiosRequest
}