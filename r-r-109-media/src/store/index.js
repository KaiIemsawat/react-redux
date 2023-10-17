import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumApi";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer, // [albumsApi.reducerPath] <-- a syntex and array
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(albumsApi.middleware);
    },
});

// TEMPORARY
// window.store = store; // use 'store.getState()' in browser console to see details

setupListeners(store.dispatch);

export * from "./thunks/fetchUser";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
export { useFetchAlbumsQuery, useAddAlbumMutation } from "./apis/albumApi";
