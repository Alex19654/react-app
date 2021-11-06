import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {appReducer} from "./reducers/app.reducer";
import {popularLanguage} from './reducers/popularLanguage.reducer';
import {repoReducer} from './reducers/repo.reducer';

const logger = createLogger({
    collapsed: true
});

const store = createStore(
    combineReducers({
        appReducer,
        popularLanguage,
        repoReducer
        
    }),
    applyMiddleware(logger)
);

export default store;
