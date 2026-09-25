import { Check, Clock, Flame, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Workout } from "@/lib/types";

type PlanWorkoutCardProps = {
  workout: Workout;
  onRemove: () => void;
  onMarkAsDone?: () => void;
};

const PlanWorkoutCard = ({
  workout,
  onRemove,
  onMarkAsDone,
}: PlanWorkoutCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-4 sm:flex-row sm:items-center">
      <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl sm:h-16 sm:w-16">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 640px) 64px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-display text-base font-bold uppercase text-foreground">
          {workout.name}
        </h3>
        <p className="text-sm text-muted-foreground">{workout.equipment}</p>
        <div className="mt-1 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame className="size-3.5" />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star className="size-3.5" />
            {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-9 rounded-full px-4"
          )}
        >
          View Details
        </Link>

        {onMarkAsDone && (
          <Button
            onClick={onMarkAsDone}
            className="h-9 gap-1.5 rounded-full px-4"
          >
            <Check className="size-4" />
            Mark as Done
          </Button>
        )}

        <Button
          onClick={onRemove}
          variant="ghost"
          size="icon-sm"
          aria-label={`Remove ${workout.name}`}
          className="rounded-full text-muted-foreground hover:text-foreground"
        >
          <X className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default PlanWorkoutCard;
