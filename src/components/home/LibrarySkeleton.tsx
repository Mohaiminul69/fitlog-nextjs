const CARD_PLACEHOLDERS = Array.from({ length: 12 }, (_, index) => index);

const LibrarySkeleton = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="font-display text-3xl font-bold uppercase text-foreground sm:text-4xl">
        The Library
      </h2>
      <p className="mt-2 text-muted-foreground">Loading workouts…</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARD_PLACEHOLDERS.map((index) => (
          <div
            key={index}
            className="animate-pulse overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div className="aspect-4/3 w-full bg-muted/40" />
            <div className="flex flex-col gap-3 p-5">
              <div className="h-4 w-24 rounded-full bg-muted/40" />
              <div className="h-5 w-3/4 rounded bg-muted/40" />
              <div className="h-3 w-1/2 rounded bg-muted/40" />
              <div className="h-4 w-full rounded bg-muted/40" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LibrarySkeleton;
