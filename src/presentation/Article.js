import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const Article = ({author, title, description}) => {
    return (
    <>
        <p aria-label="author-tag">Author: {author}</p>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
    </>
    )
}

Article.propTypes = {
    author: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}