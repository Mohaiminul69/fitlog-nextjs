import { Bookmark, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const WorkoutActions = () => {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Button className="h-12 gap-2 rounded-full px-6 text-sm font-semibold">
        <CalendarPlus className="size-4" />
        Add to today&apos;s plan
      </Button>
      <Button
        variant="outline"
        className="h-12 gap-2 rounded-full px-6 text-sm font-semibold"
      >
        <Bookmark className="size-4" />
        Save for later
      </Button>
    </div>
  );
};

export default WorkoutActions;
