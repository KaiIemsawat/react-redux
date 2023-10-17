import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
    reducerPath: "photos", // <-- this is where reducer is assigned inside global state object. In general, the name will be "'thisPart'Api" from above line
    baseQuery: fetchBaseQuery({
        // need to import 'fetchBaseQuery'
        baseUrl: "http://localhost:3005",
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({
                providesTags: (
                    result,
                    error,
                    album // 'album' not args to match with 'query: (album)' below
                ) => {
                    const tags = result.map((photo) => {
                        return { type: "Photo", id: photo.id };
                    });
                    tags.push({ type: "AlbumPhoto", id: album.id });
                    return tags;
                },
                query: (album) => {
                    return {
                        url: "/photos",
                        params: {
                            albumId: album.id,
                        },
                        method: "GET",
                    };
                },
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (
                    result,
                    error,
                    album // 'album' not args to match with 'query: (album)' below
                ) => {
                    return [{ type: "AlbumPhoto", id: album.id }];
                    // return []
                },
                query: (album) => {
                    return {
                        method: "POST",
                        url: "/photos",
                        body: {
                            albumId: album.id,
                            url: faker.image.url(150, 150, true),
                        },
                    };
                },
            }),
            removePhoto: builder.mutation({
                invalidatesTags: (
                    result,
                    error,
                    photo // 'photo' not args to match with 'query: (album)' below
                ) => {
                    return [{ type: "Photo", id: photo.id }];
                },
                query: (photo) => {
                    return {
                        method: "DELETE",
                        url: `/photos/${photo.id}`,
                    };
                },
            }),
        };
    },
});

export const {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation,
} = photosApi;
export { photosApi };
