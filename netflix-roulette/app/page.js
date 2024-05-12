import Image from "next/image";
import styles from "./page.module.css";
import { getMovieDetailsUrl } from "@/utils/utils";
import MovieDetails from "@/components/MovieDetails/MovieDetails";
import SearchHeader from "@/components/SearchHeader/SearchHeader";
import Genre from "@/components/Genre/Genre";
import SortBy from "@/components/SortBy/SortBy";

export default async function Home({ params, searchParams }) {
  const { search, searchBy, sortBy } = searchParams;
  const url = getMovieDetailsUrl(search, searchBy, sortBy);
  const response = await fetch(url);
  const movies = await response.json();
  return (
    <>
      <div>
        <SearchHeader searchParams={searchParams} />
        <div className={`${styles['genre-container']} d-flex justify-content-between align-items-center px-4`}>
          <Genre searchParams={searchParams} />
          <SortBy searchParams={searchParams} />
        </div>

        <MovieDetails movieData={movies} />
      </div>
    </>
  )
}
