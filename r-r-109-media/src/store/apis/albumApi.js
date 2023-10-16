import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const albumsApi = createApi({
    reducerPath: "albums",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
    }),
    endpoints(builder) {
        return {
            addAlbum: builder.mutation({
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
} = albumsApi;
export { albumsApi };
