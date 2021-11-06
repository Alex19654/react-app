import {selectedLanguage} from "../constants/popular.constants";

const initialState = {
    language: 'All'
}

export const popularLanguage = (state = initialState, action) => {
    switch (action.type) {
        case selectedLanguage:
            return {
                ...state,
                language: action.payload
            };
            
        default:
            return state;
    }
}
