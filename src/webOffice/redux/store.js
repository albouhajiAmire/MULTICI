import { createStore, applyMiddleware , combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import loadingReducer from './reducers/loading';
import messageReducer from './reducers/message';
import fileReducer from './reducers/file';
import chatReducer from './reducers/chat';
import authReducer from './reducers/auth';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const middlewares = [thunk]

const reducer = combineReducers({
    loading : loadingReducer ,
    message : messageReducer ,
    file : fileReducer ,
    chat : chatReducer ,
    auth : authReducer
})

const persistConfig = {
    key: 'auth',
    storage,
    whitelist : ["auth"]
}

const persistReducers = persistReducer(persistConfig , reducer)

const initialState = {}

const store = createStore(persistReducers , initialState , composeWithDevTools(applyMiddleware(...middlewares)));

const persist = persistStore(store)

export default store ;
export  {persist} ;