import fetcher from "@/utils/fetcher";
import NowPlaying from "@/components/now-playing";
import Popular from "@/components/popular";
import MovieSlider from "@/components/movie-slider";

export default async function Home() {
  const genres = await fetcher(
    `${process.env.NEXT_PUBLIC_TMDB_API_ENDPOINT}/3/genre/movie/list`,
  );

  const nowPlayingMovies = await fetcher(
    `${process.env.NEXT_PUBLIC_TMDB_API_ENDPOINT}/3/movie/now_playing`,
  );

  const trendingMovies = await fetcher(
    `${process.env.NEXT_PUBLIC_TMDB_API_ENDPOINT}/3/trending/movie/day`,
  );

  const upcomingMovies = await fetcher(
    `${process.env.NEXT_PUBLIC_TMDB_API_ENDPOINT}/3/movie/upcoming`,
  );

  const popularMovies = await fetcher(
    `${process.env.NEXT_PUBLIC_TMDB_API_ENDPOINT}/3/movie/popular?page=1`,
  );

  return (
    <div className="container space-y-10">
      <NowPlaying movies={nowPlayingMovies} genres={genres} />

      <MovieSlider
        title="Now Trending"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={34}
            height={34}
            viewBox="0 -960 960 960"
            fill="#fff"
          >
            <path d="M280-280h80v-200h-80v200Zm320 0h80v-400h-80v400Zm-160 0h80v-120h-80v120Zm0-200h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
          </svg>
        }
        movies={trendingMovies}
        genres={genres}
        delay={2500}
      />

      <MovieSlider
        title="Upcoming"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={34}
            height={34}
            viewBox="0 -960 960 960"
            fill="#fff"
          >
            <path d="M600-80v-80h160v-400H200v160h-80v-320q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H600ZM320 0l-56-56 103-104H40v-80h327L264-344l56-56 200 200L320 0Z" />
          </svg>
        }
        movies={upcomingMovies}
        genres={genres}
        delay={2500}
      />

      <Popular initialMovies={popularMovies} genres={genres} />
    </div>
  );
}
