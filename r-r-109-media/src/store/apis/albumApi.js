import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

// DEV ONLY
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

const albumsApi = createApi({
    reducerPath: "albums", // <-- this is where reducer is assigned inside global state object. In general, the name will be "'thisPart'Api" from above line
    baseQuery: fetchBaseQuery({
        // need to import 'fetchBaseQuery'
        baseUrl: "http://localhost:3005",
        fetchFn: async (...args) => {
            //
            await pause(1000); // DEV ONLY

            return fetch(...args);
        },
    }),
    endpoints(builder) {
        return {
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    console.log(album);
                    return [{ type: "Album", id: album.id }]; // < -- 'Album' general practice, Using capital and is singular. Also need to be same as *** below
                    // return []
                },
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method: "DELETE",
                    };
                },
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    // whatever we put in 'const addAlbumHandler = () => {addAlbum(user);};' in AlbumList.js is what in the third argument
                    return [{ type: "UserAlbums", id: user.id }]; // < -- 'UserAlbums' general practice, Using capital and is singular. Also need to be same as *** below
                    // return []
                },
                query: (user) => {
                    return {
                        url: "/albums",
                        method: "POST",
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName(),
                        },
                    };
                },
            }),
            fetchAlbums: builder.query({
                // 'fetchAlbums' -->  'useFetchAlbumsQuery' (custom hook)
                providesTags: (result, error, user) => {
                    //  'user' may be call 'arg' in som documents

                    const tags = result.map((album) => {
                        return { type: "Album", id: album.id }; // < For 'Album', general practice, Using capital and is singular. Also need to be same as *** above
                    });
                    tags.push({ type: "UserAlbums", id: user.id }); // < For 'UserAlbums', general practice, Using capital and is singular. Also need to be same as *** above
                    return tags;
                },
                query: (user) => {
                    // Need to pass an argument to specify which (in this case) 'user' 's albums we are looking for
                    return {
                        url: "albums",
                        params: {
                            userId: user.id,
                        },
                        method: "GET",
                    };
                },
            }),
        };
    },
});

export const {
    useFetchAlbumsQuery, // For example, 'useFetchAlbumsQuery' comes from use + fetchAlbums (from above) + query. 'query' comes from 'fetchAlbums: builder.query'
    useAddAlbumMutation, // So, 'useAddAlbumMutation' comes from use + addAlbum (from above) + mutation. 'mutation' comes from 'addAlbum: builder.mutation'
    useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };

/* 
    queries VS mutations

    QUERY
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    queries run immediately when the component is displayed on the screen (by default)

    MUTATION
    const [addAlbum, result] = useAddAlbumMutation();
    mutations give us a function to run when we want to change some data
*/
