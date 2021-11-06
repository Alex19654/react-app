import {repos} from "../constants/popular.constants";

const initialState = {
    repos: null
}

export const repoReducer = (state = initialState, action) => {
    switch (action.type) {
         case repos:
            return {
               ...state,
               repos: action.payload
            }
            
        default:
            return state;
    }
}
