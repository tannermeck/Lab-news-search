import React from 'react';
import { render } from '@testing-library/react'
import { ArticleList } from './ArticleList';


describe('should render an article list', () => {
    it('it should render an array of authors, titles, and descriptions', () => {
        const articles = [ 
            {title:'bitcoin', author:'Elon Musk', description: 'Bitcoin soars'},
            {title:'health', author:'Dr. Phil', description:'stop eating red meats'}]
        const { asFragment } = render(
        <ArticleList  articles={articles} />);
        expect(asFragment()).toMatchSnapshot()
        
    })
})