import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import WorkoutActions from "@/components/workout/WorkoutActions";
import WorkoutInstructions from "@/components/workout/WorkoutInstructions";
import WorkoutSpecs from "@/components/workout/WorkoutSpecs";

const WorkoutDetailPage = async ({ params }: PageProps<"/workouts/[id]">) => {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-3xl lg:aspect-auto">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="font-display text-3xl font-bold uppercase leading-tight text-foreground sm:text-4xl">
            {workout.name}
          </h1>
          <p className="mt-4 text-muted-foreground">{workout.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground"
              >
                {group}
              </span>
            ))}
          </div>

          <WorkoutSpecs workout={workout} />
          <WorkoutInstructions instructions={workout.instructions} />
          <WorkoutActions workout={workout} />
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailPage;
