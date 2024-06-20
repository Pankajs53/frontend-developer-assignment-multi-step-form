import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    currStep: 1,
    currData:{}
}

const formSlice = createSlice({
    name: "formS",
    initialState: intialState,
    reducers: {
        // set curr step
        setCurrStep(state, value) {
            state.currStep = value.payload;
        },
        // store previous and new data
        setCurrData(state, action) {
            state.currData = {
                ...state.currData,
                ...action.payload
            };
            localStorage.setItem("formData",JSON.stringify(state))

        },
        // clear the currData and set step to 1
        resetForm(state) {
            state.currStep = 1;
            state.currData = { };
            localStorage.removeItem('formData');
        }
    }


})

export const { setCurrStep, setCurrData, resetForm } = formSlice.actions;

export default formSlice.reducer;