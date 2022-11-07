import React from 'react'
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiheaders={
  'X-RapidAPI-Key': 'a37eacb218msh66b6a6ced5a7e7fp129fdejsn20dd76f62021',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const createRequest=(url)=>({url, headers:cryptoApiheaders});

export const cryptoApi = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'cryptoApi',
    // All of our requests will have URLs starting with '/fakeApi'
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
      // The `getPosts` endpoint is a "query" operation that returns data
      getCryptos: builder.query({
        // The URL for the request is '/fakeApi/posts'
        query: (count) => createRequest(`/coins?limit=${count}`)
      }),
      getCryptoDetails:builder.query({
        query:(coinId)=>createRequest(`/coin/${coinId}`)
      }),
      getCryptoHistory:builder.query({
        query:({coinId, timePeriod})=>createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`)
      }),
      getCryptoExchanges:builder.query({
        query:()=>createRequest(`/exchanges`)
      })
    })
  })

  export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetCryptoExchangesQuery
  }=cryptoApi

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'a37eacb218msh66b6a6ced5a7e7fp129fdejsn20dd76f62021',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };