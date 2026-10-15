import { Character } from "@/graphql/queries";
import Image from "next/image";
import Link from "next/link";

type CharacterCardProps = {
  character: Character;
  index: number;
};

export default function CharacterCard({
  character,
  index,
}: CharacterCardProps) {
  return (
    <article className="character-card" id={`subject-${character.id}`}>
      <Link
        aria-label={`View ${character.name} in the character registry`}
        className="character-image-link"
        href={`/characters/${character.id}`}
      >
        <div className="character-image">
          <Image
            alt={character.name}
            fill
            loading={index > 4 ? "lazy" : "eager"}
            sizes="(max-width: 640px) 76vw, (max-width: 1024px) 34vw, 250px"
            src={character.image}
          />
          <span className="character-id">SUBJECT / {String(index + 1).padStart(3, "0")}</span>
          <span className="character-status">
            <span className="status-dot" />
            {character.status}
          </span>
        </div>
      </Link>
      <div className="character-details">
        {/* <span className="character-classification">{character.classification}</span> */}
        <h3>{character.name}</h3>
        <div className="character-meta">
          <span>{character.species}</span>
          <span>{character.origin.dimension}</span>
        </div>
        <p className="character-origin">ORIGIN / {character.origin.dimension}</p>
      </div>
    </article>
  );
}


export function CharacterCardSkeleton() {
  return (
    <article className="character-card" aria-hidden="true">
      <div className="character-image-link">
        <div className="character-image">
          <div className="skeleton skeleton-fill" />
          <span className="skeleton skeleton-pill skeleton-id" />
          <span className="skeleton skeleton-pill skeleton-status" />
        </div>
      </div>
      <div className="character-details">
        <div className="skeleton skeleton-line skeleton-title" />
        <div className="character-meta">
          <span className="skeleton skeleton-line skeleton-meta" />
          <span className="skeleton skeleton-line skeleton-meta" />
        </div>
        <div className="skeleton skeleton-line skeleton-origin" />
      </div>
    </article>
  );
}