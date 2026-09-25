import { ArrowDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 rounded-3xl bg-surface px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Workout Library
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Train with intent. Log every set.
          </h1>
          <p className="mt-6 max-w-md text-base text-muted">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Browse Workouts
            <ArrowDown className="size-4" />
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/assets/banner.png"
            alt="Illustration of a muscular figure using a cable row machine"
            width={334}
            height={334}
            priority
            className="w-full max-w-xs sm:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
