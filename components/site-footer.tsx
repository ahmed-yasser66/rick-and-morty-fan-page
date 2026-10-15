import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="footer-wordmark" href="/">
          CITADEL.HUB <span>{"// C-137"}</span>
        </Link>
        <p>An unofficial archive for an officially unstable multiverse.</p>
        <span className="footer-status">
          <span className="status-dot" />
          END OF TRANSMISSION
        </span>
      </div>
    </footer>
  );
}
