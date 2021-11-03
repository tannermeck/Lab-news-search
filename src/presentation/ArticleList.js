import PropTypes from 'prop-types';
import React from 'react';
import { Article } from './Article';

export const ArticleList = ({ articles }) => {
    const articleList = articles.map(({ author, title, description }) => (
        <li key={`${author}-${title}`}>
            <Article author={author}
            title={title}
            description={description}
            />
        </li>
    ))
    return <ul>{articleList}</ul>
}
ArticleList.proptypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    )
}