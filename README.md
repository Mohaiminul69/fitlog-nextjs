# FitLog

A workout library and daily planner built with Next.js. This was my Assignment 6 project — pick a lift from the library, check out its details, and lock it into today's plan or save it for later. Everything is dark-themed and built to match the given Figma design as closely as I could get it.

## What it does

FitLog pulls a set of workouts from an API and lets you browse them, view full details for each one (equipment, sets/reps, instructions, etc.), and manage a "My Plan" page where you track what you're doing today vs. what you've saved for later. There's a 5-workout cap on today's plan so you don't overload the day, and everything gives you a toast so you always know what just happened.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + TypeScript
- **Tailwind CSS v4** for styling
- **shadcn/ui** components (Button, Tabs, Select, Sonner toaster)
- **Lucide React** for icons

## Features

1. Responsive workout library (3-column grid on desktop) pulling live data from the FitLog API, with a loading skeleton while it fetches.
2. Workout detail page with a key-specs panel (equipment, difficulty, sets, reps, duration, calories, rating) and numbered step-by-step instructions.
3. Add to Today's Plan / Save for Later actions with toast feedback, duplicate-add protection, and a 5-lift daily cap.
4. My Plan page with a live stats row (exercises/minutes/calories) that updates depending on which tab — Today's Plan or Saved — you're viewing.
5. Sort dropdown (Duration / Calories / Rating) that re-sorts whichever list is active.
6. Mark as Done and Remove actions on planned workouts, each with its own toast.
7. Custom empty state and a custom 404 page instead of the default Next.js ones.
8. Fully responsive layout across mobile, tablet, and desktop.

## Running it locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Submission

- Live Link: https://fitlog-nextjs-hazel.vercel.app/my-plan
- GitHub Repository Link: https://github.com/Mohaiminul69/fitlog-nextjs
