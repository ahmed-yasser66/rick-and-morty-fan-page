import type { Location } from "@/lib/data";

type LocationGridProps = {
  locations: Location[];
};

export default function LocationGrid({ locations }: LocationGridProps) {
  return (
    <div className="location-grid">
      {locations.map((location, index) => (
        <article
          className={`location-card location-${location.variant}`}
          key={location.name}
        >
          <div aria-hidden="true" className="location-art">
            <span className="location-art-label">SECTOR / {String(index + 1).padStart(2, "0")}</span>
            <span className="location-orb" />
            <span className="location-orbit" />
            <span className="location-art-coordinate">{location.dimension}</span>
          </div>
          <div className="location-details">
            <div className="location-topline">
              <span className="eyebrow">{location.type}</span>
              <span className="location-dimension">{location.dimension}</span>
            </div>
            <h3>{location.name}</h3>
            <p>{location.description}</p>
            <span className="location-coordinates">{location.coordinates}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
