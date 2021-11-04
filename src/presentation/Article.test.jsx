import React from 'react';
import { render } from '@testing-library/react'
import { Article } from './Article';

describe('should render a list of articles', () => {
    it('it should render a list of authors, titles, and descriptions', () => {
        const { asFragment } = render(
        <Article title='bitcoin' author='Elon Musk' description='Bitcoin soars' />);
        expect(asFragment()).toMatchSnapshot()
    })
})