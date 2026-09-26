"use client";

import { useEffect, useMemo, useState } from "react";
import PlanEmptyState from "@/components/plan/PlanEmptyState";
import WorkoutStats from "@/components/plan/WorkoutStats";
import PlanWorkoutCard from "@/components/plan/PlanWorkoutCard";
import SortSelect, { type SortKey } from "@/components/plan/SortSelect";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { usePlan } from "@/context/PlanContext";
import type { Workout } from "@/lib/types";

const sortWorkouts = (workouts: Workout[], sortBy: SortKey) => {
  const sorted = [...workouts];

  if (sortBy === "duration") {
    return sorted.sort((a, b) => a.duration - b.duration);
  }

  if (sortBy === "calories") {
    return sorted.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
  }

  return sorted.sort((a, b) => b.rating - a.rating);
};

const MyPlanPage = () => {
  const { plan, saved, removeFromPlan, removeFromSaved, markAsDone } =
    usePlan();
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<SortKey>("duration");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoading(false), 0);
    return () => clearTimeout(timeoutId);
  }, []);

  const activeList = activeTab === "today" ? plan : saved;
  const exercises = activeList.length;
  const minutes = activeList.reduce(
    (total, workout) => total + workout.duration,
    0
  );
  const calories = activeList.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const sortedPlan = useMemo(() => sortWorkouts(plan, sortBy), [plan, sortBy]);
  const sortedSaved = useMemo(
    () => sortWorkouts(saved, sortBy),
    [saved, sortBy]
  );

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold uppercase text-foreground sm:text-4xl">
        My Plan
      </h1>
      <p className="mt-2 text-muted-foreground">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-8">
        <WorkoutStats exercises={exercises} minutes={minutes} calories={calories} />
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as "today" | "saved")}
        className="mt-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <TabsList>
            <TabsTrigger value="today" className="flex-none px-3">
              Today&apos;s Plan
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex-none px-3">
              Saved
            </TabsTrigger>
          </TabsList>
          <SortSelect value={sortBy} onChange={setSortBy} />
        </div>

        <TabsContent value="today" className="mt-6">
          {isLoading ? (
            <p className="py-20 text-center text-muted-foreground">
              Loading workouts…
            </p>
          ) : sortedPlan.length === 0 ? (
            <PlanEmptyState />
          ) : (
            <div className="flex flex-col gap-4">
              {sortedPlan.map((workout) => (
                <PlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  onRemove={() => removeFromPlan(workout.id)}
                  onMarkAsDone={() => markAsDone(workout.id)}
                />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          {isLoading ? (
            <p className="py-20 text-center text-muted-foreground">
              Loading workouts…
            </p>
          ) : sortedSaved.length === 0 ? (
            <PlanEmptyState />
          ) : (
            <div className="flex flex-col gap-4">
              {sortedSaved.map((workout) => (
                <PlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  onRemove={() => removeFromSaved(workout.id)}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyPlanPage;
