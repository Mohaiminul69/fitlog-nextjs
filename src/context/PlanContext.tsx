"use client";

import { createContext, useContext, useState } from "react";
import { toast } from "sonner";
import type { Workout } from "@/lib/types";

export const PLAN_LIMIT = 5;

type PlanContextValue = {
  plan: Workout[];
  saved: Workout[];
  isPlanFull: boolean;
  isInPlan: (id: number) => boolean;
  isInSaved: (id: number) => boolean;
  addToPlan: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
};

const PlanContext = createContext<PlanContextValue | null>(null);

export const PlanProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  const isInPlan = (id: number) => plan.some((workout) => workout.id === id);
  const isInSaved = (id: number) => saved.some((workout) => workout.id === id);

  const addToPlan = (workout: Workout) => {
    if (isInPlan(workout.id)) {
      toast("Already in your plan");
      return;
    }

    if (plan.length >= PLAN_LIMIT) {
      toast.error("Today's plan is full", {
        description: "Mark a lift as done or remove one before adding another.",
      });
      return;
    }

    setPlan((prev) => [...prev, workout]);
    toast.success("Added to today's plan");
  };

  const addToSaved = (workout: Workout) => {
    if (isInSaved(workout.id)) {
      toast("Already saved");
      return;
    }
    setSaved((prev) => [...prev, workout]);
    toast.success("Saved for later");
  };

  const removeFromPlan = (id: number) => {
    setPlan((prev) => prev.filter((workout) => workout.id !== id));
    toast("Removed from today's plan");
  };

  const removeFromSaved = (id: number) => {
    setSaved((prev) => prev.filter((workout) => workout.id !== id));
    toast("Removed from saved");
  };

  const markAsDone = (id: number) => {
    setPlan((prev) => prev.filter((workout) => workout.id !== id));
    toast.success("Marked as done");
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        isPlanFull: plan.length >= PLAN_LIMIT,
        isInPlan,
        isInSaved,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }

  return context;
};
