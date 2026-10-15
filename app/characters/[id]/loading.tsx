const ROWS = ["w-24", "w-40", "w-32"];

export default function CharacterLoading() {
  return (
    <main
      aria-busy="true"
      aria-live="polite"
      className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12"
    >
      <span className="sr-only">Loading subject record…</span>

      {/* Back link */}
      <div className="flex min-h-11 items-center gap-3" aria-hidden="true">
        <div className="skeleton h-5 w-5" />
        <div className="skeleton h-3.5 w-36" />
      </div>

      <article
        aria-hidden="true"
        className="mt-6 grid overflow-hidden border border-[#293237] bg-[#0d1114] lg:grid-cols-[0.95fr_1.05fr]"
      >
        {/* Image */}
        <div className="relative aspect-square min-h-0 overflow-hidden bg-[#14191c] sm:aspect-[1.08] lg:aspect-auto lg:min-h-152">
          <div className="skeleton absolute inset-0 rounded-none" />
          <div className="skeleton absolute bottom-5 left-5 h-3 w-48 sm:bottom-7 sm:left-7" />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center px-5 py-8 sm:px-9 sm:py-12 lg:px-12">
          {/* Status */}
          <div className="mb-5 flex items-center gap-3">
            <div className="skeleton h-2.5 w-2.5 rounded-full" />
            <div className="skeleton h-3 w-32" />
          </div>

          {/* Name */}
          <div className="skeleton h-10 w-4/5 sm:h-12 lg:h-14" />

          {/* Description */}
          <div className="mt-5 flex max-w-md flex-col gap-2.5">
            <div className="skeleton h-3.5 w-full" />
            <div className="skeleton h-3.5 w-11/12" />
            <div className="skeleton h-3.5 w-2/3" />
          </div>

          {/* Species / Origin / Dimension */}
          <dl className="mt-9 divide-y divide-[#293237] border-y border-[#293237]">
            {ROWS.map((valueWidth, i) => (
              <div
                className="grid grid-cols-[7rem_minmax(0,1fr)] items-center gap-4 py-5 sm:grid-cols-[9rem_minmax(0,1fr)]"
                key={i}
              >
                <div className="skeleton h-3 w-20" />
                <div className={`skeleton h-4 ${valueWidth}`} />
              </div>
            ))}
          </dl>

          <div className="skeleton mt-6 h-2.5 w-3/4" />
        </div>
      </article>
    </main>
  );
}