import {createStore, applyMiddleware, compose} from 'redux'
import { reducer } from './reducers'
import thunk from 'redux-thunk'

const initialState = {}

export const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk)) //middleware 
);