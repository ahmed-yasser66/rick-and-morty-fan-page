import { CharacterCardSkeleton } from "@/components/character-card";
import SectionHeading from "@/components/section-heading";

const SKELETON_COUNT = 12;

export default function CharactersLoading() {
  return (
    <main className="directory-page" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading subject registry…</span>
      <div className="directory-heading pt-0!">
        <SectionHeading
          eyebrow="SUBJECT INDEX / 01"
          title="Characters & Clones"
          description="Known entities, questionable duplicates, and a surprising number of Ricks. Status may change without notice."
        />
        <div className="directory-count" aria-hidden="true">
          <strong className="skeleton skeleton-count">00</strong>
          <span>SUBJECTS<br />IN THIS FILE</span>
        </div>
      </div>
      <div className="registry-grid">
        {Array.from({ length: SKELETON_COUNT }, (_, i) => (
          <CharacterCardSkeleton key={i} />
        ))}
      </div>
      <p className="directory-footnote">
        REGISTRY NOTE: Retrieving records from the multiverse…
      </p>
    </main>
  );
}