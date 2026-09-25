import Image from "next/image";
import Link from "next/link";

const TEXT_SIZE_CLASSES = {
  sm: "text-base",
  lg: "text-lg",
} as const;

type LogoProps = {
  size?: "sm" | "lg";
  onClick?: () => void;
};

const Logo = ({ size = "lg", onClick }: LogoProps) => {
  const iconSize = size === "lg" ? 24 : 20;

  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2"
      onClick={onClick}
    >
      <Image src="/assets/logo.png" alt="" width={iconSize} height={iconSize} />
      <span
        className={`font-display font-bold tracking-wide text-foreground ${TEXT_SIZE_CLASSES[size]}`}
      >
        FITLOG
      </span>
    </Link>
  );
};

export default Logo;
