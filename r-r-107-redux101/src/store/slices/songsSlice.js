import { createSlice } from "@reduxjs/toolkit";
import { resetAll } from "../action";

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            // action.payload === string, the song needed to remove
            const index = state.indexOf(action.payload);
            state.splice(index, 1); // <-- '1' means that it will remove only 1 item from that index
        },
    },
    extraReducers(builder) {
        builder.addCase(resetAll, (state, action) => {
            return [];
        });
    },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
