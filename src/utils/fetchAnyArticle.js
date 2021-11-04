import React from 'react';

export const fetchAnyArticle = async (query) => {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_API_KEY}`
    const search = await fetch(url);
    const response = await search.json();
    return response.articles;
}