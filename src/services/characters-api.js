import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const charactersAPI = createApi({
  reducerPath: 'charactersAPI',
  tagTypes: ['Characters'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (build) => ({ //query - GET reuqest, mutation - POST, PUT ...
    fetchAllCharacters: build.query({
      query: (_limit) => ({
        url: '/characters',
        params: {
          _limit
        }
      }),
      providesTags: (result) => ['Characters']
    }),
    createCharacter: build.mutation({
      query: (body) => ({
        url: '/characters',
        method: 'POST',
        body 
      }),
      invalidatesTags: ['Characters']
    }),
    updateCharacter: build.mutation({
      query: (body) => ({
        url: `/characters/${body.id}`,
        method: 'PATCH',
        body 
      }),
      invalidatesTags: ['Characters']
    }),
    deleteCharacter: build.mutation({
      query: (body) => ({
        url: `/characters/${body.id}`,
        method: 'DELETE',
        body 
      }),
      invalidatesTags: ['Characters']
    }),
  })
});

export const {
  useFetchAllCharactersQuery,
  useCreateCharacterMutation,
  useUpdateCharacterMutation,
  useDeleteCharacterMutation
} = charactersAPI;
