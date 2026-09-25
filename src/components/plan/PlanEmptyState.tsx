import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PlanEmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border px-6 py-20 text-center">
      <h3 className="font-display text-xl font-bold uppercase text-foreground">
        Nothing here yet
      </h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Browse the library and add a lift to get today moving.
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

export default PlanEmptyState;
