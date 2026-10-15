import CharacterCarousel from "@/components/character-carousel";
import HeroSection from "@/components/hero-section";
import LocationGrid from "@/components/location-grid";
import SectionHeading from "@/components/section-heading";
import { query } from "@/graphql/ApolloClient";
import { GET_CHARACTERS, GetCharactersType } from "@/graphql/queries";
import { locations } from "@/lib/data";
import Link from "next/link";
import { Suspense } from "react";

function CharacterCarouselFallback() {
  return (
    <div className="carousel-fallback" aria-busy="true">
      <span className="eyebrow">SCANNING NEARBY SUBJECTS...</span>
    </div>
  );
}

export default async function Home() {

  const { data } = await query<GetCharactersType>({
    query: GET_CHARACTERS
  })

  const characters = data?.characters.results; 

  return (
    <main>
      <HeroSection />

      <section className="content-section characters-section" id="characters">
        <div className="section-topline">
          <SectionHeading
            eyebrow="01 / KNOWN UNIVERSE"
            title="The usual suspects."
            description="A few familiar faces from a very unfamiliar multiverse."
          />
          <Link className="text-link" href="/characters">
            View all characters <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <Suspense fallback={<CharacterCarouselFallback />}>
          <CharacterCarousel characters={characters!.slice(0,8)} />
        </Suspense>
      </section>

      <section className="content-section locations-section" id="locations">
        <div className="section-topline">
          <SectionHeading
            eyebrow="02 / COORDINATES LOCKED"
            title="Places you shouldn’t go."
            description="Somewhere to land, hide, or accidentally start an intergalactic incident."
          />
          <span className="section-count">04 LOCATIONS MAPPED</span>
        </div>
        <LocationGrid locations={locations} />
      </section>
    </main>
  );
}
