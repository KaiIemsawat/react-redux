import { createSlice } from "@reduxjs/toolkit";
import { resetAll } from "../action";

const moviesSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
    },
    extraReducers(builder) {
        builder.addCase(resetAll, (state, action) => {
            return [];
        });
    },
});

export const { addMovie, removeMovie } = moviesSlice.actions; // <- actions is an object so we destructure to export the function inside
export const moviesReducer = moviesSlice.reducer;
