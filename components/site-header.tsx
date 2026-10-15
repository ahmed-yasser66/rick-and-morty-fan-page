"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

const navigation = [
  { href: "/", label: "Dimension Hub" },
  { href: "/characters", label: "Characters & Clones" },
  { href: "/episodes", label: "Episodes" },
];

function NavigationLinks({ pathname }: { pathname: string | null }) {
  return (
    <nav className="primary-nav" aria-label="Main navigation">
      <div className="nav-inner">
        {navigation.map(({ href, label }, index) => {
          const isCurrent = pathname
            ? href === "/"
              ? pathname === "/"
              : pathname.startsWith(href)
            : false;

          return (
            <Link
              aria-current={isCurrent ? "page" : undefined}
              className={`nav-link${isCurrent ? " is-active" : ""}`}
              href={href}
              key={href}
            >
              <span className="nav-index">0{index + 1}</span>
              {label}
            </Link>
          );
        })}
        <span className="nav-coordinate">EARTH / C-137</span>
      </div>
    </nav>
  );
}

function ActiveNavigation() {
  return <NavigationLinks pathname={usePathname()} />;
}

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Citadel Hub home">
          <span className="wordmark-mark" aria-hidden="true">
            C
          </span>
          <span>
            <strong>CITADEL.HUB</strong>
            <small>{"// C-137"}</small>
          </span>
        </Link>

        <div className="header-status" aria-label="Portal connection status">
          <span className="status-dot" />
          <span>PORTAL STABLE</span>
        </div>
      </div>
      <Suspense fallback={<NavigationLinks pathname={null} />}>
        <ActiveNavigation />
      </Suspense>
    </header>
  );
}
