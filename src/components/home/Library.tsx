import { getWorkouts } from "@/lib/api";
import WorkoutCard from "@/components/home/WorkoutCard";

const Library = async () => {
  const workouts = await getWorkouts();

  return (
    <section
      id="library"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <h2 className="font-display text-3xl font-bold uppercase text-foreground sm:text-4xl">
        The Library
      </h2>
      <p className="mt-2 text-muted">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default Library;
