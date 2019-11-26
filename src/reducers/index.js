import { combineReducers } from "redux";
import { chatReducer as chat } from './chatReducer';

export default combineReducers({ chat });