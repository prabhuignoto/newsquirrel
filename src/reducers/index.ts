import { combineReducers } from "redux";
import news from "./newsReducers";
import options from './optionsReducer';

export default combineReducers({
  news,
  options
});