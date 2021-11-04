import React from 'react';

export const SearchArticles = ({onSubmit, query, handleChange}) => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="search">Find Articles</label>
                <input id="search" name="search" value={query} onChange={handleChange}/>
                <button aria-label="button">Search Articles!</button>
            </form>
        </>
    )
}