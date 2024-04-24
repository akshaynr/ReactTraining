import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Genre from './Genre';
import { GenresList } from '../../constants/constants'

const genresList = ["All", "Documentary", "Comedy", "Horror", "Crime"];
const selectedGenre = genresList[0];
const onGenreSelect = jest.fn();
const renderComponent = () => render(<Genre genresList={genresList} selectedGenre={selectedGenre} onGenreSelect={onGenreSelect} />);

describe('Genere', () => {
    test('should render correctly', () => {
        renderComponent();
        genresList.forEach((element) => {
            const buttonText = screen.getByRole('button', {
                name: element
            });
            expect(buttonText).toBeInTheDocument();
        })
    })

    test(`should render correctly with ${genresList.length} buttons`, () => {
        renderComponent();
        const result = screen.getAllByRole('button');
        expect(result).toHaveLength(GenresList.length);
    })

    test('should have selected class for element selected', () => {
        renderComponent();
        const result = screen.getByText(selectedGenre);
        expect(result).toHaveClass('selected');
    })

    test('should  have selected class only for selected element otherwise it should not be present', () => {
        renderComponent();
        genresList.forEach((element) => {
            const buttonText = screen.getByText(element);
            element === selectedGenre ? expect(buttonText).toHaveClass('selected') : expect(buttonText).not.toHaveClass('selected');
        })
    })

    test(`should click second element and call onGenreSelect`, async () => {
        user.setup();
        renderComponent();
        const nonSelectedButton = screen.getByRole('button', {
            name: GenresList[1]
        });
        expect(nonSelectedButton).not.toHaveClass('selected');
        await user.click(nonSelectedButton);
        expect(onGenreSelect).toHaveBeenCalledTimes(1);
    })
});