import { createStore, combineReducers } from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import SignIn from './login'

const reducers = combineReducers({ SignIn })

const store= ()=> {
    return createStore(reducers, composeWithDevTools());
}

export default store();