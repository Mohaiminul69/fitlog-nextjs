import type { Workout } from "@/lib/types";

type WorkoutSpecsProps = {
  workout: Workout;
};

const WorkoutSpecs = ({ workout }: WorkoutSpecsProps) => {
  const rows: { label: string; value: string | number }[] = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-border">
      {rows.map((row, index) => (
        <div
          key={row.label}
          className={`flex items-center justify-between px-5 py-3 text-sm ${
            index % 2 === 1 ? "bg-white/3" : "bg-surface"
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
            {row.label}
          </span>
          <span className="font-medium text-foreground">{row.value}</span>
        </div>
      ))}
    </div>
  );
};

export default WorkoutSpecs;
