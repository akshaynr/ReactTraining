import { API_URLS,  GenresList, DefaultQueryParams } from "@/constants/constants";

export const getMovieDetailsUrl = (search = DefaultQueryParams.search, searchBy = DefaultQueryParams.searchBy, sortBy = DefaultQueryParams.sortBy) => {
    let url = API_URLS.getAllMoviesWithOffsetLimit;

    if(search){
        if(searchBy == DefaultQueryParams.searchBy) url += `&search=${search}&searchBy=title`;
        else if(search !== GenresList[0]) url += `&search=${search}&searchBy=genres`;
    }

    if(sortBy) url += `&sortBy=${sortBy}&sortOrder=asc`;
    return url;
}

export const getMovieDetailsByIdUrl = (movieId) => `${API_URLS.getMovies}/${movieId}`;