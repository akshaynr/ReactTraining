import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Search from './Search';

describe('Search', () => {
    const onSearch = jest.fn();
    test('should render correctly', () => {
        const initialValue = '';
        render(<Search initialSearchQuery={initialValue} onSearch={onSearch} />);
    
        const placeHolderElement = screen.getByPlaceholderText('What do you want to watch?');
        expect(placeHolderElement).toBeInTheDocument();
    
        const searchBtnResult = screen.getByRole('button', {
            name: 'Search'
        });
        expect(searchBtnResult).toBeInTheDocument();
    })

    test('should contain text as Test and triggers onSearch on search button click  ', async () => {
        user.setup()
        const initialValue = '';
        render(<Search initialSearchQuery={initialValue} onSearch={onSearch} />);
    
        const searchInput = screen.getByRole('textbox');
        await user.type(searchInput, 'Test');
        expect(searchInput).toHaveValue('Test');

        const searchButton = screen.getByRole('button', {
            name: 'Search'
        });
        await user.click(searchButton);
        expect(onSearch).toHaveBeenCalledTimes(1);
        expect(onSearch).toHaveBeenCalledWith('Test');
    })
});