"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Props {
  movie: any;
  images: any;
}

const MoviePreview = ({ movie, images }: Props) => {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      pagination
      modules={[Autoplay, Pagination]}
      className="mt-4"
    >
      {images?.backdrops.map((image: any, index: number) => (
        <SwiperSlide key={index} className="relative aspect-video">
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_ENDPOINT}/t/p/original${image.file_path}`}
            fill
            sizes="1000px"
            alt={movie.title}
            className="rounded-md"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MoviePreview;
