import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Genre from './Genre';
import { GenresList } from '../../constants/constants'

describe('Genere', () => {

    const selectedGenre = GenresList[0];
    const onGenreSelect = jest.fn();

    test('should render correctly', () => {
        render(<Genre genresList={GenresList} selectedGenre={selectedGenre} onGenreSelect={onGenreSelect} />);
    
        GenresList.forEach((element) => {
            const buttonText = screen.getByRole('button', {
                name: element
            });
            expect(buttonText).toBeInTheDocument();
        })
    })

    test(`should render correctly with ${GenresList.length} buttons`, () => {
        render(<Genre genresList={GenresList} selectedGenre={selectedGenre} onGenreSelect={onGenreSelect} />);
        const result = screen.getAllByRole('button');
        expect(result).toHaveLength(GenresList.length);
    })

    test('should have selected class for element selected', () => {
        render(<Genre genresList={GenresList} selectedGenre={selectedGenre} onGenreSelect={onGenreSelect} />);
        const result = screen.getByText(selectedGenre);
        expect(result).toHaveClass('selected');
    })

    test('should  have selected class only for selected element otherwise it should not be present' , () => {
        render(<Genre genresList={GenresList} selectedGenre={selectedGenre} onGenreSelect={onGenreSelect} />);

        GenresList.forEach((element) => {
            const buttonText = screen.getByText(element);
            element === selectedGenre ? expect(buttonText).toHaveClass('selected') : expect(buttonText).not.toHaveClass('selected');
        })
    })

    test(`should click second element and call onGenreSelect`, async () => {
        user.setup();
        render(<Genre genresList={GenresList} selectedGenre={selectedGenre} onGenreSelect={onGenreSelect} />);

        const nonSelectedButton = screen.getByRole('button', {
            name: GenresList[1]
        });
        expect(nonSelectedButton).not.toHaveClass('selected');

        await user.click(nonSelectedButton);
        expect(onGenreSelect).toHaveBeenCalledTimes(1);
    })

});