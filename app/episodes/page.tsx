import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { query } from "@/graphql/ApolloClient";
import { GET_EPISODES } from "@/graphql/queries";
import type { EpisodeType, GetEpisodesType } from "@/graphql/queries";

import { episodes as imagesVariant } from "@/lib/data";

type EpisodesPageProps = {
  searchParams: Promise<{ page?: string | string[] }>;
};

export const metadata = {
  title: "Episodes | Citadel.Hub",
  description: "Episode files from the first known season of Rick and Morty.",
};

export default async function EpisodesPage({
  searchParams,
}: EpisodesPageProps) {
  const { page: pageParam } = await searchParams;
  const requestedPage = Array.isArray(pageParam) ? pageParam[0] : pageParam;
  const parsedPage = Number(requestedPage);
  const page =
    Number.isSafeInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  const { data } = await query<GetEpisodesType>({
    query: GET_EPISODES,
    variables: { page },
  });

  const episodes: EpisodeType[] = data?.episodes?.results ?? [];
  const totalPages = data?.episodes?.info.pages ?? 1;

  const images = imagesVariant.filter(ep => ep.variant);

  return (
    <main className="directory-page episodes-page">
      <div className="directory-heading pb-10">
        <SectionHeading
          eyebrow="TRANSMISSION LOG / SEASON 01"
          title="Episode files."
          description="A chronological record of dimension hops, bad decisions, and the occasional family dinner."
        />
        <div className="directory-count">
          <strong>{String(episodes.length).padStart(2, "0")}</strong>
          <span>FILES<br />RECOVERED</span>
        </div>
      </div>
      <div className="episode-list">
        {episodes.map((episode, index) => (
          <article className="episode-card" key={episode.id}>
            <div className={`episode-poster poster-${images[Math.abs(index % 6)].variant}`}>
              <span className="poster-label">CITADEL ARCHIVE</span>
              <span aria-hidden="true" className="poster-orb" />
              <span className="poster-number">{String((page - 1) * 20 + index + 1)}</span>
            </div>
            <div className="episode-content">
              <span className="eyebrow">{episode.episode} / FILE RECOVERED</span>
              <h2>{episode.name}</h2>
              {/* <p>{episode.description}</p> */}
              <span className="episode-airdate">ORIGINAL TRANSMISSION / {episode.air_date}</span>
            </div>
            {/* <span className="episode-arrow" aria-hidden="true">↗</span> */}
          </article>
        ))}
      </div>
      {totalPages > 1 && (
        <nav
          aria-label="Episode pages"
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          <Link
            aria-disabled={page <= 1}
            className={`border border-[#293237] px-3 py-2 text-sm transition-colors ${page <= 1
              ? "pointer-events-none text-[#65716a]"
              : "text-[#c7d3c9] hover:border-[#47f3f1] hover:text-[#47f3f1]"
              }`}
            href={`/episodes?page=${Math.max(1, page - 1)}`}
            tabIndex={page <= 1 ? -1 : undefined}
          >
            Previous
          </Link>
          <span className="px-2 text-sm text-[#8c9b91]">
            Page {page} of {totalPages}
          </span>
          <Link
            aria-disabled={page >= totalPages}
            className={`border border-[#293237] px-3 py-2 text-sm transition-colors ${page >= totalPages
              ? "pointer-events-none text-[#65716a]"
              : "text-[#c7d3c9] hover:border-[#47f3f1] hover:text-[#47f3f1]"
              }`}
            href={`/episodes?page=${Math.min(totalPages, page + 1)}`}
            tabIndex={page >= totalPages ? -1 : undefined}
          >
            Next
          </Link>
        </nav>
      )}
    </main>
  );
}
