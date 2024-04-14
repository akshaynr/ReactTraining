import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import MovieDetails from './MovieDetails';
import { Movies, SortType } from '../../constants/constants'

describe('MovieCard', () => {
    const onMovieSelect = jest.fn();
    const selectedGenre = 'All';
    const selectedSortBy = SortType[0].value;

    test('should render correctly', () => {
        
        render(<MovieDetails selectedGenre={selectedGenre} selectedSortBy={selectedSortBy} onMovieSelect = { onMovieSelect }/>);
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
        render(<MovieDetails selectedGenre={selectedGenre} selectedSortBy={selectedSortBy} onMovieSelect = { onMovieSelect }/>);
        const movieCards = screen.getAllByTestId('movie-card');
        movieCards.forEach(async (card, index) => {
            await user.click(card);
            expect(onMovieSelect).toHaveBeenCalledWith(Movies[index]);
         });
    })
})