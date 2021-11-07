import { setDescription } from "../constants/dashboard.constants";

const initState = {
   description: ''
};

export const description = (state = initState, action) => {
   switch (action.type) {
      case setDescription: 
         return {...state, description: action.payload};
      default: 
         return state;
   }
}