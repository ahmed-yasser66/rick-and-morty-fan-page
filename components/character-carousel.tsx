"use client";

import CharacterCard from "@/components/character-card";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Character } from "@/graphql/queries/GetCharacters";

type CharacterCarouselProps = {
  characters: Character[]
}

export default function CharacterCarousel({ characters }: CharacterCarouselProps) {

  return (
    <div className="carousel-frame">
      <Swiper
        aria-label="Featured characters"
        breakpoints={{
          640: { slidesPerView: 2.2 },
          960: { slidesPerView: 3.4 },
          1280: { slidesPerView: 4.2 },
        }}
        className="character-swiper"
        modules={[A11y, Navigation]}
        navigation={{
          nextEl: ".character-carousel-next",
          prevEl: ".character-carousel-prev",
        }}
        slidesPerView={1.25}
        spaceBetween={16}
        watchOverflow
      >
        {characters!.map((character, index) => (
          <SwiperSlide key={character.id}>
            <CharacterCard character={character} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="carousel-controls">
        <span className="carousel-hint">SWIPE TO SCAN</span>
        <button
          aria-label="Previous characters"
          className="carousel-arrow character-carousel-prev"
          type="button"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          aria-label="Next characters"
          className="carousel-arrow character-carousel-next"
          type="button"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
