import { render, screen } from '@testing-library/react';
import MovieTile from './MovieTile';
import { Movies } from '../../constants/constants'

describe('MovieTile', () => {
    const onMovieSelect = jest.fn();
    const movieInfo = Movies[0];

    test('should render correctly', () => {
        
        render(<MovieTile movieDetails={movieInfo} onMovieSelect={onMovieSelect}/>);
        // Text
        const movieTitleElement = screen.getByText(movieInfo.title);
        expect(movieTitleElement).toBeInTheDocument();

        const movieVoteElement = screen.getByText(movieInfo.vote_average);
        expect(movieVoteElement).toBeInTheDocument();

        const movieYearElement = screen.getByText(new Date(movieInfo.release_date).getFullYear());
        expect(movieYearElement).toBeInTheDocument();

        // Image
        const imageElement = screen.getByAltText(movieInfo.title);
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', movieInfo.poster_path);
    })
})