import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('shows a list of articles', () => {
    it('should display a list of authors, titles, and description', async () => {
        render(<NewsSearch />)
        screen.getByText('Loading...');
        const ul = await screen.findByRole('list', { name: 'articles' });
        expect(ul).toMatchSnapshot();
        const input = await screen.findByLabelText('Find Articles')
        userEvent.type(input, 'health');
        const submit = await screen.findByRole('button', { name: 'button' })
        userEvent.click(submit);
        return waitFor(() => {
            const quotes = screen.getAllByText('Description', 
            {exact: false})
            expect(quotes).toHaveLength(20);
        })
    })
}) 