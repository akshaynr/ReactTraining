import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import SortBy from './SortBy';
import { SortType } from '../../constants/constants';

const onSortBySelect = jest.fn();
const selectedSortBy = 'release_date';
const renderComponent = () => render(<SortBy selectedSortBy={selectedSortBy} onSortBySelect={onSortBySelect} />);

describe('SortBy', () => {
    test('should render correctly', () => {
        renderComponent();
        // Text
        const textElement = screen.getByText('Sort By');
        expect(textElement).toBeInTheDocument();

        // Options
        const optionsElement = screen.getAllByRole('option');
        expect(optionsElement).toHaveLength(SortType.length);

        //Default Selected value
        const selectDisplayValue = screen.getByDisplayValue(SortType[0].displayName);
        expect(selectDisplayValue).toBeInTheDocument();
    })

    test('should select title option on selection', async () => {
        user.setup();
        renderComponent();

        // Options
        const selectElement = screen.getByRole('combobox');
        expect(selectElement).toHaveValue(SortType[0].value);

        await user.selectOptions(selectElement, SortType[1].value);
        expect(selectElement).toHaveValue(SortType[1].value);
        expect(onSortBySelect).toHaveBeenCalled();
    })
})