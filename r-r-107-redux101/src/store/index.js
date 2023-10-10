import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        // <- combination of multiple 'reducer's
        // reducers with 's'
        addSong(state, action) {
            console.log(
                state.length,
                "this 'state' is in addSong in reduces in songsSlice // to clarify the different of 'state'"
            );
            // This state is not the big state object in the store.
            // It is the piece of state managed by the reducer
            state.push(action.payload);
        },
        removeSong(state, action) {
            // action.payload === string, the song needed to remove
            const index = state.indexOf(action.payload);
            state.splice(index, 1); // <-- '1' means that it will remove only 1 item from that index
        },
    },
});

const store = configureStore({
    reducer: {
        // 'reducer' without 's'
        songs: songsSlice.reducer, // 'songsSlice' <- get this slices 'initialState' property
        // With the line above we create a 'state' of songs as -> {songs: []}
        // Since 'initialState: []' was set as empty [], so that songs has initial state of empty []
        // Does not have to be [], it could be an object, a string, etc
    },
    // -- This object determines what keys our 'big' state object has --
    // reducer: {
    //     songs: songsSlice.reducer,
    // },
});

// console.log(songsSlice.actions.addSong("Some Songs..")); // songsSlice.actions <-- action creator
// console.log(store);

export { store };
export const { addSong, removeSong } = songsSlice.actions;
