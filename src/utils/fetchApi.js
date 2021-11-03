import React from 'react';

export default async function fetchApi() {
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_API_KEY}`
    const search = await fetch(url);
    const response = await search.json();
    console.log(response.articles)
    return response.articles;
}