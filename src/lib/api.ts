import type { Workout } from "@/lib/types";

const API_BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

export const getWorkouts = async (): Promise<Workout[]> => {
  const res = await fetch(API_BASE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

export const getWorkoutById = async (id: string): Promise<Workout | null> => {
  const res = await fetch(`${API_BASE_URL}/${id}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
};
