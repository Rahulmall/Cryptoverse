

import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const crytpNewsapiheaders={
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': 'a37eacb218msh66b6a6ced5a7e7fp129fdejsn20dd76f62021',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const createRequest=(url)=>({url, headers:crytpNewsapiheaders});

export const cryptoNewsapi = createApi({

    reducerPath: 'cryptoNewsapi',

    baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com' }),
   
    endpoints: builder => ({
    
      getCryptoNews: builder.query({
      
        query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
      })
    })
  })

  export const {
    useGetCryptoNewsQuery,
  }=cryptoNewsapi

