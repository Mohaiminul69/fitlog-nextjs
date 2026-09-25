import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/lib/types";

type WorkoutCardProps = {
  workout: Workout;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/40"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground"
            >
              {group}
            </span>
          ))}
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase leading-snug text-foreground">
            {workout.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{workout.equipment}</p>
        </div>

        <div className="mt-auto flex items-center gap-4 border-t border-border pt-3 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Clock className="size-4" />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1.5">
            <Flame className="size-4" />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="size-4" />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
