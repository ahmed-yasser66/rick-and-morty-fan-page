import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-shell" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="status-dot" />
            INTERDIMENSIONAL ARCHIVE / ONLINE
          </div>
          <h1 id="hero-title">
            DIMENSION
            <br />
            <span>HUB</span>
          </h1>
          <p className="hero-description">
            Your field guide to the infinite realities, questionable
            life-forms, and places Rick probably shouldn’t have taken you.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/characters">
              Explore the registry <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-secondary" href="#locations">
              Browse locations
            </Link>
          </div>
          <div className="hero-readout" aria-label="Archive details">
            <div>
              <span className="readout-value">∞</span>
              <span className="readout-label">DIMENSIONS</span>
            </div>
            <div>
              <span className="readout-value">C-137</span>
              <span className="readout-label">CURRENT SECTOR</span>
            </div>
            <div>
              <span className="readout-value">WIP</span>
              <span className="readout-label">SURVIVAL ODDS</span>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-label="Rick and Morty, ready for another adventure">
          <div className="hero-orbit hero-orbit-outer" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-inner" aria-hidden="true" />
          <span className="hero-art-coordinate coordinate-top" aria-hidden="true">
            47° 36&apos; N / 122° 20&apos; W
          </span>
          <span className="hero-art-coordinate coordinate-bottom" aria-hidden="true">
            SUBJECTS: 02 // SIGNAL: STRONG
          </span>
          <div className="hero-character hero-character-rick">
            <Image
              alt="Rick Sanchez"
              fill
              priority
              sizes="(max-width: 768px) 48vw, 340px"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
            <span className="hero-nameplate">R. SANCHEZ / C-137</span>
          </div>
          <div className="hero-character hero-character-morty">
            <Image
              alt="Morty Smith"
              fill
              priority
              sizes="(max-width: 768px) 35vw, 250px"
              src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            />
            <span className="hero-nameplate">M. SMITH / C-137</span>
          </div>
          <span className="hero-crosshair crosshair-one" aria-hidden="true" />
          <span className="hero-crosshair crosshair-two" aria-hidden="true" />
        </div>
      </div>
      <div className="hero-bottomline">
        <span>UNAUTHORIZED INTERDIMENSIONAL TRAVEL IS STRONGLY ENCOURAGED</span>
        <span className="hero-bottom-index">ARCHIVE ENTRY / 0001</span>
      </div>
    </section>
  );
}
