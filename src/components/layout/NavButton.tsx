import Link from "next/link";

type NavButtonProps = {
  label: string;
  count: number;
  variant: "filled" | "outline";
  onClick?: () => void;
};

const NavButton = ({ label, count, variant, onClick }: NavButtonProps) => {
  return (
    <Link
      href="/my-plan"
      onClick={onClick}
      className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
    >
      {label}
      <span
        className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-semibold ${
          variant === "filled"
            ? "bg-primary text-primary-foreground"
            : "border border-border text-foreground"
        }`}
      >
        {count}
      </span>
    </Link>
  );
};

export default NavButton;
