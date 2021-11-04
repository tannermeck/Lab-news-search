import React from 'react';
import {render} from '@testing-library/react';
import { SearchArticles } from './SearchArticles';

describe('should imitate a search query', () => {
    it('should return a list of articles related to the search', () => {
        const { asFragment } = render(
            <SearchArticles onSubmit='health' query='health' handleChange='health'/>
        )
        expect(asFragment()).toMatchSnapshot()
    })
})