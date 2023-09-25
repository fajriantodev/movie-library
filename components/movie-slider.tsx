"use client";

import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionTitle from "./section-title";
import MoviePoster from "./movie-poster";
import "swiper/css";

interface Props {
  title: string;
  icon: ReactNode;
  movies: Movies;
  genres: Genres;
  delay: number;
}

const MovieSlider = ({ title, icon, movies, genres, delay }: Props) => {
  return (
    <div>
      <SectionTitle icon={icon} title={title} />
      <Swiper
        autoplay={{
          delay,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={20}
        slidesPerView={5}
        className="mt-4"
        modules={[Autoplay]}
      >
        {movies?.results.map((movie: Movie, index: number) => (
          <SwiperSlide key={index}>
            <MoviePoster movie={movie} genres={genres} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
