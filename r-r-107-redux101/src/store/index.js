import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { resetAll } from "./action";

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
    },
});

console.log(store.getState());

export { store, addSong, removeSong, addMovie, removeMovie, resetAll };
