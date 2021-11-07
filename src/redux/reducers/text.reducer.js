import { setText } from "../constants/dashboard.constants";

const initState = {
   text: ''
};

export const text = (state = initState, action) => {
   switch (action.type) {
      case setText: 
         return {...state, text: action.payload};
      default: 
         return state;
   }
}