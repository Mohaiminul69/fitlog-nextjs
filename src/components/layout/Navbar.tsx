"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/layout/Logo";
import NavButton from "@/components/layout/NavButton";
import NavLinks from "@/components/layout/NavLinks";
import { usePlan } from "@/context/PlanContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { plan, saved } = usePlan();

  const planCount = plan.length;
  const savedCount = saved.length;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo onClick={() => setIsOpen(false)} />

        <NavLinks variant="desktop" />

        <div className="hidden items-center gap-4 md:flex">
          <NavButton label="Plan" count={planCount} variant="filled" />
          <NavButton label="Saved" count={savedCount} variant="outline" />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex size-9 items-center justify-center rounded-md text-foreground md:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border px-4 pb-4 pt-2 md:hidden">
          <NavLinks variant="mobile" onLinkClick={() => setIsOpen(false)} />
          <div className="mt-3 flex items-center gap-4 border-t border-border pt-3">
            <NavButton
              label="Plan"
              count={planCount}
              variant="filled"
              onClick={() => setIsOpen(false)}
            />
            <NavButton
              label="Saved"
              count={savedCount}
              variant="outline"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
