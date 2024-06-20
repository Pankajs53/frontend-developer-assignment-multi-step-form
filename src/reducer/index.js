import formReducer from "../slices/formSlice" 
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    formSlice:formReducer,
  });
  
  export default rootReducer;