import Link from "next/link";
import Image from "next/image";

interface Props {
  movie: Movie;
  genres: Genres;
  isLoading?: boolean;
}

const MoviePoster = ({ movie, genres, isLoading }: Props) => {
  return (
    <div>
      <div
        className={`${
          isLoading && "skeleton-loader"
        } group relative aspect-[2/3]`}
      >
        {!isLoading && (
          <>
            <Image
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_ENDPOINT}/t/p/original${movie.poster_path}`}
              fill
              sizes="1000px"
              alt={movie.title}
              className="rounded-xl"
            />
            <div className="absolute flex h-full w-full items-center justify-center rounded-xl bg-black bg-opacity-70 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <Link
                href={`/movie/${movie.id}`}
                className="mt-4 inline-block rounded-xl border border-yellow-600 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-yellow-600"
              >
                More Info
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="mt-3">
        <div className="flex justify-between space-x-10">
          <Link
            href={`/movie/${movie.id}`}
            className={`${
              isLoading && "skeleton-loader"
            } overflow-hidden text-ellipsis whitespace-nowrap text-lg text-white hover:underline`}
          >
            {movie.title}
          </Link>
          <div
            className={`${
              isLoading && "skeleton-loader"
            } flex items-center space-x-1 fill-yellow-500 text-white`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <span className="text-lg">{movie.vote_average}</span>
          </div>
        </div>
        <div
          className={`${
            isLoading && "skeleton-loader"
          } mt-1 flex w-fit space-x-2 text-gray-400`}
        >
          <ul className="flex items-center">
            {movie.genre_ids.map((genreId: number, index: number) => {
              const genre = genres?.genres.filter(
                (genre: Genre) => genre.id === genreId,
              )[0];

              if (index <= 1) {
                return (
                  <li key={index} className="text-sm">
                    {index > 0 && <span className="pr-1">,</span>}
                    {genre?.name}
                  </li>
                );
              }
            })}
          </ul>
          <span className="text-sm">&#x2022;</span>
          <span className="text-sm">
            {new Date(movie.release_date).getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MoviePoster;
