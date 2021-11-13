import { GET_ITEMS_FETCH_REQUEST, GET_ITEMS_FETCH_SUCCESS, GET_ITEMS_FETCH_FAILURE } from "../constants/dashboard.constants";

const initState = {
   loading: false,
   items: null,
   error: null
};

export const albums = (state = initState, action) => {
   switch (action.type) {
      case GET_ITEMS_FETCH_REQUEST: 
         return {...state, loading: true};
      case GET_ITEMS_FETCH_SUCCESS: 
         return {...state, loading: false, items: action.payload};
      case GET_ITEMS_FETCH_FAILURE: 
         return {...state, loading: false, items: action.payload};
      default: 
         return state;
   }
}