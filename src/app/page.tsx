import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import Library from "@/components/home/Library";
import LibrarySkeleton from "@/components/home/LibrarySkeleton";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <Suspense fallback={<LibrarySkeleton />}>
        <Library />
      </Suspense>
    </div>
  );
};

export default Home;
