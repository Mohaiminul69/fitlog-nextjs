"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
] as const;

const isLinkActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

type NavLinksProps = {
  variant: "desktop" | "mobile";
  onLinkClick?: () => void;
};

const NavLinks = ({ variant, onLinkClick }: NavLinksProps) => {
  const pathname = usePathname();

  const wrapperClassName =
    variant === "desktop"
      ? "hidden items-center gap-1 md:flex"
      : "flex flex-col gap-1";

  const linkSizeClassName =
    variant === "desktop" ? "rounded-full px-4 py-2" : "rounded-md px-3 py-2";

  return (
    <nav className={wrapperClassName}>
      {NAV_LINKS.map((link) => {
        const isActive = isLinkActive(pathname, link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            aria-current={isActive ? "page" : undefined}
            className={`${linkSizeClassName} text-sm font-medium transition-colors ${
              isActive
                ? "bg-active-pill text-primary"
                : "text-muted hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
