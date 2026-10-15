import { query } from "@/graphql/ApolloClient";
import {
  GET_SINGLE_CHARACTER,
  type GetSingleCharacterType,
} from "@/graphql/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type CharacterPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { id } = await params;
  const { data } = await query<GetSingleCharacterType>({
    query: GET_SINGLE_CHARACTER,
    variables: { id },
  });
  const character = data?.character;

  if (!character) {
    notFound();
  }

  const statusColor =
    character.status === "Alive"
      ? "bg-[#39ff14]"
      : character.status === "Dead"
        ? "bg-[#ff6b6b]"
        : "bg-[#baccb0]";

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <Link
        className="inline-flex min-h-11 items-center gap-3 text-sm text-[#baccb0] transition-colors hover:text-[#39ff14] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39ff14]"
        href="/characters"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 12H5m0 0 7 7m-7-7 7-7"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
        Back to characters
      </Link>

      <article className="mt-6 grid overflow-hidden border border-[#293237] bg-[#0d1114] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative aspect-square min-h-0 overflow-hidden bg-[#14191c] sm:aspect-[1.08] lg:aspect-auto lg:min-h-152">
          <Image
            alt={character.name}
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
            src={character.image}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#080b0d]/90 via-transparent to-[#080b0d]/20"
          />
          <p className="absolute bottom-5 left-5 m-0 font-mono text-xs tracking-[0.16em] text-[#efffe3] sm:bottom-7 sm:left-7">
            CITADEL.HUB / SUBJECT {id.padStart(3, "0")}
          </p>
        </div>

        <div className="flex flex-col justify-center px-5 py-8 sm:px-9 sm:py-12 lg:px-12">
          <div className="mb-5 flex items-center gap-3">
            <span
              aria-hidden="true"
              className={`h-2.5 w-2.5 rounded-full ${statusColor}`}
            />
            <span className="font-mono text-xs tracking-[0.14em] text-[#baccb0]">
              STATUS / {character.status}
            </span>
          </div>

          <h1 className="m-0 [font-family:var(--font-spacegrotesk-mono)] text-4xl leading-tight font-bold tracking-tighter text-[#efffe3] sm:text-5xl lg:text-6xl">
            {character.name}
          </h1>
          <p className="mt-4 mb-0 max-w-md text-base leading-7 text-[#baccb0]">
            A registered subject of the known multiverse. Origin coordinates and
            biological classification are listed below.
          </p>

          <dl className="mt-9 divide-y divide-[#293237] border-y border-[#293237]">
            <div className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 py-5 sm:grid-cols-[9rem_minmax(0,1fr)]">
              <dt className="font-mono text-xs tracking-[0.08em] text-[#87958c]">
                SPECIES
              </dt>
              <dd className="m-0 text-sm text-[#efffe3] sm:text-base">
                {character.species}
              </dd>
            </div>
            <div className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 py-5 sm:grid-cols-[9rem_minmax(0,1fr)]">
              <dt className="font-mono text-xs tracking-[0.08em] text-[#87958c]">
                ORIGIN
              </dt>
              <dd className="m-0 text-sm text-[#efffe3] sm:text-base">
                {character.origin?.name ?? "Unknown"}
              </dd>
            </div>
            <div className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 py-5 sm:grid-cols-[9rem_minmax(0,1fr)]">
              <dt className="font-mono text-xs tracking-[0.08em] text-[#87958c]">
                DIMENSION
              </dt>
              <dd className="m-0 text-sm text-[#efffe3] sm:text-base">
                {character.origin?.dimension ?? "Uncharted"}
              </dd>
            </div>
          </dl>

          <p className="mt-6 mb-0 font-mono text-[0.65rem] leading-5 tracking-[0.08em] text-[#87958c]">
            RECORD RETRIEVED FROM THE INTERDIMENSIONAL REGISTRY
          </p>
        </div>
      </article>
    </main>
  );
}