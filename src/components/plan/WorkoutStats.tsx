type WorkoutStatsProps = {
  exercises: number;
  minutes: number;
  calories: number;
};

const WorkoutStats = ({ exercises, minutes, calories }: WorkoutStatsProps) => {
  const stats = [
    { label: "Exercises", value: exercises, accent: true },
    { label: "Minutes", value: minutes, accent: false },
    { label: "Calories", value: calories, accent: false },
  ];

  return (
    <div className="grid grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-surface">
      {stats.map((stat) => (
        <div key={stat.label} className="px-4 py-5 sm:px-6">
          <p className="text-sm text-muted-foreground">{stat.label}</p>
          <p
            className={`mt-1 text-3xl font-bold ${
              stat.accent ? "text-primary" : "text-foreground"
            }`}
          >
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutStats;
