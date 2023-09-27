import Link from "next/link";

interface Props {
  movies: Movies;
  genres: Genres;
}

const NowPlaying = ({ movies, genres }: Props) => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-5">
      {movies?.results.map(
        (movie: Movie, index: number) =>
          index <= 3 &&
          (index === 0 ? (
            <div
              key={index}
              className="relative col-span-3 row-span-3 overflow-hidden rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_IMAGE_ENDPOINT}/t/p/original${movie.backdrop_path})`,
              }}
            >
              <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-10">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                    >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        fill="#eab308"
                      />
                    </svg>
                    <span>{movie.vote_average}</span>
                  </div>
                  <ul className="flex items-center text-white">
                    {movie.genre_ids.map((genreId: number, index: number) => {
                      const genre = genres?.genres.filter(
                        (genre: Genre) => genre.id === genreId,
                      )[0];

                      return (
                        <li key={index}>
                          {index > 0 && <span className="px-1">-</span>}
                          {genre?.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <h1 className="mt-4 text-5xl font-bold text-white">
                  {movie.original_title}
                </h1>
                <p className="mt-4 w-3/4 text-gray-300">{movie.overview}</p>
                <Link
                  href={`/movie/${movie.id}`}
                  className="mt-4 inline-block rounded-lg border border-yellow-600 bg-transparent px-5 py-2.5 text-white transition-colors duration-200 hover:bg-yellow-600"
                >
                  More Info
                </Link>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_IMAGE_ENDPOINT}/t/p/original${movie.backdrop_path})`,
              }}
            >
              <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-5">
                <Link
                  href={`/movie/${movie.id}`}
                  className="text-2xl font-medium text-white hover:underline"
                >
                  {movie.original_title}
                </Link>
                <p className="text-truncate mt-1 inline-block w-4/5 text-sm leading-5 text-gray-300">
                  {movie.overview}
                </p>
              </div>
            </div>
          )),
      )}
    </div>
  );
};

export default NowPlaying;
