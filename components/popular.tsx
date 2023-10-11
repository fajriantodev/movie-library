"use client";

import { useState } from "react";
import useSWRMutation from "swr/mutation";
import InfiniteScroll from "react-infinite-scroll-component";
import fetcher from "@/utils/fetcher";
import SectionTitle from "./section-title";
import MoviePoster from "./movie-poster";

interface Props {
  initialMovies: Movies;
  genres: Genres;
}

const Popular = ({ initialMovies, genres }: Props) => {
  const [movies, setMovies] = useState(initialMovies?.results);
  const [page, setPage] = useState(1);

  const { trigger: getMovies, isMutating } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_TMDB_API_ENDPOINT}/3/movie/popular?page=${
      page + 1
    }`,
    fetcher,
  );

  const loadMoreMovies = async () => {
    const moreMovies = await getMovies();

    setMovies([...movies, ...moreMovies?.results]);
    setPage(page + 1);
  };

  return (
    <div>
      <SectionTitle
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={34}
            height={34}
            viewBox="0 -960 960 960"
            fill="#fff"
          >
            <path d="m160-800 80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Z" />
          </svg>
        }
        title="Popular"
      />
      <InfiniteScroll
        dataLength={movies.length}
        next={loadMoreMovies}
        hasMore={true}
        loader="<h4 className='text-white'>Loading...</h4>"
        className="mt-4 grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-5"
      >
        {movies?.map((movie: Movie, index: number) => (
          <MoviePoster
            key={index}
            movie={movie}
            genres={genres}
            isLoading={index >= movies.length - 20 && isMutating}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Popular;
