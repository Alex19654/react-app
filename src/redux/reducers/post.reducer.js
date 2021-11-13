import { setDescription, setText } from "../constants/dashboard.constants";

const initState = {
   description: "",
   text: ""
};

export const post = (state = initState, action) => {
   switch (action.type) {
      case setDescription: 
         return {...state, description: action.payload};
      case setText: 
         return {...state, text: action.payload};
      default: 
         return state;
   }
}