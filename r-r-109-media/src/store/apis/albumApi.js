import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
    reducerPath: "albums",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
    }),
    endpoints(builder) {
        return {
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

export const { useFetchAlbumsQuery } = albumsApi; // 'useFetchAlbumsQuery' comes from use + fetchAlbums (from above) + Query
export { albumsApi };
