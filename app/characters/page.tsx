import CharacterCard from "@/components/character-card";
import SectionHeading from "@/components/section-heading";
import { query } from "@/graphql/ApolloClient";
import { GET_CHARACTERS, GetCharactersType } from "@/graphql/queries";

export const metadata = {
  title: "Characters & Clones | Citadel.Hub",
  description: "Browse the Citadel.Hub subject registry across the multiverse.",
};

export default async function CharactersPage() {
  const { data } = await query<GetCharactersType>({
    query: GET_CHARACTERS
  })

  const characters = data?.characters.results;
  return (
    <main className="directory-page">
      <div className="directory-heading pt-0!">
        <SectionHeading
          eyebrow="SUBJECT INDEX / 01"
          title="Characters & Clones"
          description="Known entities, questionable duplicates, and a surprising number of Ricks. Status may change without notice."
        />
        <div className="directory-count">
          <strong>{String(characters?.length).padStart(2, "0")}</strong>
          <span>SUBJECTS<br />IN THIS FILE</span>
        </div>
      </div>
      <div className="registry-grid">
        {characters!.map((character, index) => (
          <CharacterCard
            character={character}
            index={index}
            key={character.id + character.name}
          />
        ))}
      </div>
      <p className="directory-footnote">
        REGISTRY NOTE: Identity records are cross-referenced against the
        Rick and Morty API. Some origins remain classified.
      </p>
    </main>
  );
}
