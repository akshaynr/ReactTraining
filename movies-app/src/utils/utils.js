import { API_URLS, GenresList } from "../constants/constants"

export const getMovieDetailsUrl = (selectedGenre, selectedSortBy, searchQuery) => {
    let url = API_URLS.getAllMovies;

    if(searchQuery) url += `&search=${searchQuery}&searchBy=title`;
    else if(selectedGenre && selectedGenre !== GenresList[0]) url += `&search=${selectedGenre}&searchBy=genres`;

    if(selectedSortBy) url += `&sortBy=${selectedSortBy}&sortOrder=asc`;
    return url;
}