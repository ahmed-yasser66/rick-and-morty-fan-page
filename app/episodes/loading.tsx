const SKELETON_ROWS = 5;

export default function EpisodesLoading() {
  return (
    <main className="directory-page episodes-page" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading episode files…</span>

      <div className="directory-heading pb-10">
        <div className="section-heading">
          <div className="skeleton h-3 w-44" />
          <div className="skeleton mt-4 h-12 w-64 max-w-full sm:h-16 sm:w-96" />
          <div className="mt-4 flex max-w-2xl flex-col gap-2">
            <div className="skeleton h-3.5 w-full" />
            <div className="skeleton h-3.5 w-4/5" />
          </div>
        </div>
        <div className="directory-count" aria-hidden="true">
          <strong className="skeleton skeleton-count">00</strong>
          <span>FILES<br />RECOVERED</span>
        </div>
      </div>

      <div className="border-t border-[#293237]" aria-hidden="true">
        {Array.from({ length: SKELETON_ROWS }, (_, index) => (
          <div
            className="grid grid-cols-[94px_minmax(0,1fr)] items-center gap-4 border-b border-[#293237] py-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6"
            key={index}
          >
            <div className="skeleton h-28 sm:h-32" />
            <div className="flex min-w-0 flex-col gap-3">
              <div className="skeleton h-3 w-32 max-w-full" />
              <div className="skeleton h-6 w-3/4 max-w-full" />
              <div className="skeleton h-3 w-40 max-w-full" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
