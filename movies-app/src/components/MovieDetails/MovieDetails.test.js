import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import MovieDetails from './MovieDetails';
import { Movies, SortType } from '../../constants/constants';

const onMovieSelect = jest.fn();
const selectedGenre = 'All';
const selectedSortBy = SortType[0].value;
const renderComponent = () => render(<MovieDetails selectedGenre={selectedGenre} selectedSortBy={selectedSortBy} onMovieSelect={onMovieSelect} />);

describe('MovieCard', () => {
    test('should render correctly', () => {
        renderComponent();
        // Text
        const searchResultCount = screen.getByText(`${Movies.length} movies found`);
        expect(searchResultCount).toBeInTheDocument();

        const movieCards = screen.getAllByTestId('movie-card');
        expect(movieCards).toHaveLength(Movies.length);

        movieCards.forEach((card, index) => {
            expect(card).toHaveTextContent(Movies[index].title);
        });
    })

    test('should call onMovieSelect on movie card click', async () => {
        user.setup();
        renderComponent();
        const movieCards = screen.getAllByTestId('movie-card');
        movieCards.forEach(async (card, index) => {
            await user.click(card);
            expect(onMovieSelect).toHaveBeenCalledWith(Movies[index]);
        });
    })
})