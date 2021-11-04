import PropTypes from 'prop-types';
import React from 'react';
import { Article } from './Article';

export const ArticleList = ({ articles }) => {
    const articleList = articles.map(({ author, title, description, publishedAt }) => (
        <li key={`${author}-${title}-${publishedAt}`}>
            <Article author={author}
            title={title}
            description={description}
            />
        </li>
    ))
    return <ul>
        {articleList}
        </ul>
}
ArticleList.proptypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    )
}