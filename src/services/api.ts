import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Game } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),
  endpoints: builder => ({
    getJogos: builder.query<Games[], void>({
      query () => 'produtos'
    })
  })
})

export const { useGetJogosQuery } = api

export default api
