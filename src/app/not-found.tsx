import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NotFound = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="font-display text-6xl font-bold uppercase text-primary sm:text-7xl">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl font-bold uppercase text-foreground sm:text-3xl">
        Nothing here yet
      </h1>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        This lift doesn&apos;t exist. Head back to the library and find
        something to log instead.
      </p>
      <Link
        href="/"
        className={cn(
          buttonVariants(),
          "mt-6 h-10 rounded-full px-6 text-sm font-semibold"
        )}
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default NotFound;
