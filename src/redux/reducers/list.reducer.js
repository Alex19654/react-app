import { setList, modifyList } from "../constants/dashboard.constants";

const initState = {
   list: null
};

export const list = (state = initState, action) => {
   switch (action.type) {
      case setList: 
         return {...state, list: action.payload};
      case modifyList: 
         return {...state, list: action.payload[0].filter(item => item.id !== action.payload[1].target.parentNode.id)}
      default: 
         return state;
   }
}