import { API_URLS, GenresList } from "../constants/constants"

export const getMovieDetailsUrl = (selectedGenre, selectedSortBy, searchQuery) => {
    let url = API_URLS.getAllMoviesWithOffsetLimit;

    if(searchQuery) url += `&search=${searchQuery}&searchBy=title`;
    else if(selectedGenre && selectedGenre !== GenresList[0]) url += `&search=${selectedGenre}&searchBy=genres`;

    if(selectedSortBy) url += `&sortBy=${selectedSortBy}&sortOrder=asc`;
    return url;
}

export const getMovieDetailsByIdUrl = (movieId) => `${API_URLS.getMovies}/${movieId}`;

export function updateQueryParams(
    prevParams,
    setParams,
    updatedParams
  ) {
    let params = {};
    const query = prevParams.get("query");
    const genre = prevParams.get("genre");
    const sortBy = prevParams.get("sortBy");
    if (query && updatedParams.query) {
      params = { ...params, query };
    }
    if (genre && updatedParams.genre) {
      params = { ...params, genre };
    }
    if (sortBy) {
      params = { ...params, sortBy };
    }
    params = { ...params, ...updatedParams };
    setParams(params);
  }