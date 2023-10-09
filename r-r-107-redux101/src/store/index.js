import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        // <- combination of multiple 'reducer's
        // reducers with 's'
        addSong(state, action) {
            // This state is not the big state object in the store.
            // It is the piece of state managed by the reducer
            state.push(action.payload);
        },
        removeSong(state, action) {
            //
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

console.log(songsSlice.actions.addSong("Some Songs..")); // songsSlice.actions <-- action creator

// console.log(store);

const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch(
    // {
    // type: "song/addSong", // come from name: "song" and reducers:{addSong(){}} -> song + / + addSong
    // payload: "New Song!!",
    // }

    // later on, switch to

    songsSlice.actions.addSong("Some Songs!!!")
);

const finalState = store.getState();
console.log(JSON.stringify(finalState));
