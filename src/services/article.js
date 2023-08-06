import {createApi,fetchBaseQuery} from
 '@reduxjs/toolkit/query/react';

//  const options = {
//     method: 'GET',
//     url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//     params: {
//       url: 'https://time.com/6266679/musk-ai-open-letter/',
//       length: '3'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'dec63173abmshf96ec5c1519c58dp1bfdc1jsne4bb6b136c23',
//       'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//     }
//   };
const RapidApiKey= import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
export const articleApi= createApi({
    reducerPath:'articleApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key',RapidApiKey);
            headers.set('X-RapidAPI-Host',
            'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints:(builder)=>({
        getSummary: builder.query({
            query:(params) => 
            `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
}); 

export const {useLazyGetSummaryQuery}= articleApi;