"use client";

import { Bookmark, BookmarkCheck, CalendarCheck, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePlan } from "@/context/PlanContext";
import type { Workout } from "@/lib/types";

type WorkoutActionsProps = {
  workout: Workout;
};

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const { isInPlan, isInSaved, addToPlan, addToSaved } = usePlan();

  const inPlan = isInPlan(workout.id);
  const inSaved = isInSaved(workout.id);

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Button
        onClick={() => addToPlan(workout)}
        className="h-12 gap-2 rounded-full px-6 text-sm font-semibold"
      >
        {inPlan ? (
          <CalendarCheck className="size-4" />
        ) : (
          <CalendarPlus className="size-4" />
        )}
        {inPlan ? "Added to today's plan" : "Add to today's plan"}
      </Button>
      <Button
        onClick={() => addToSaved(workout)}
        variant="outline"
        className="h-12 gap-2 rounded-full px-6 text-sm font-semibold"
      >
        {inSaved ? (
          <BookmarkCheck className="size-4" />
        ) : (
          <Bookmark className="size-4" />
        )}
        {inSaved ? "Saved" : "Save for later"}
      </Button>
    </div>
  );
};

export default WorkoutActions;
