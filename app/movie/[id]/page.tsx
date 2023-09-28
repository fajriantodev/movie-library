import Image from "next/image";
import fetcher from "@/utils/fetcher";
import SectionTitle from "@/components/section-title";
import MoviePreview from "@/components/movie-preview";

interface Props {
  params: { id: number };
}

export default async function Movie({ params }: Props) {
  const movie = await fetcher(
    `${process.env.NEXT_PUBLIC_TMDB_API_ENDPOINT}/3/movie/${params.id}`,
  );

  const images = await fetcher(
    `${process.env.NEXT_PUBLIC_TMDB_API_ENDPOINT}/3/movie/${params.id}/images`,
  );

  console.log(images);

  return (
    <div className="container">
      <div className="flex space-x-10">
        <div className="relative aspect-[2/3] basis-1/3">
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_ENDPOINT}/t/p/original${movie.poster_path}`}
            fill
            sizes="1000px"
            alt={movie.title}
            className="rounded-xl"
          />
        </div>
        <ul className="basis-2/3 space-y-5">
          <li>
            <h1 className="mt-4 text-5xl font-bold text-white">
              {movie.original_title}
            </h1>
            <p className="mt-4 w-3/4 text-gray-300">{movie.overview}</p>
          </li>
          <li>
            <h4 className="text-xl font-bold text-white">Genres</h4>
            <ul className="mt-0.5 flex items-center text-gray-300">
              {movie.genres.map((genre: any, index: number) => (
                <li key={index}>
                  {index > 0 && <span className="pr-1">,</span>}
                  {genre.name}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h4 className="text-xl font-bold text-white">Duration</h4>
            <p className="mt-0.5 text-gray-300">{movie.runtime} min</p>
          </li>
          <li>
            <h4 className="text-xl font-bold text-white">Languages</h4>
            <ul className="mt-0.5 flex items-center text-gray-300">
              {movie.spoken_languages.map((language: any, index: number) => (
                <li key={index}>
                  {index > 0 && <span className="pr-1">,</span>}
                  {language.english_name}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h4 className="text-xl font-bold text-white">
              Production Companies
            </h4>
            <ul className="mt-0.5 flex items-center text-gray-300">
              {movie.production_companies.map((company: any, index: number) => (
                <li key={index}>
                  {index > 0 && <span className="pr-1">,</span>}
                  {company.name}{" "}
                  {company.origin_country && `(${company.origin_country})`}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h4 className="text-xl font-bold text-white">Release Date</h4>
            <p className="mt-0.5 text-gray-300">
              {new Date(movie.release_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </li>
          <li>
            <h4 className="text-xl font-bold text-white">Rate</h4>
            <div className="mt-0.5 flex items-center space-x-1 fill-yellow-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <span className="text-lg">
                {Number(movie.vote_average).toFixed(1)}
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="my-10">
        <SectionTitle
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={34}
              viewBox="0 -960 960 960"
              fill="#fff"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" />
            </svg>
          }
          title="Preview"
        />
        <MoviePreview movie={movie} images={images} />
      </div>
    </div>
  );
}
