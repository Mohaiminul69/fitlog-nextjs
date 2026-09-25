type WorkoutInstructionsProps = {
  instructions: string[];
};

const WorkoutInstructions = ({ instructions }: WorkoutInstructionsProps) => {
  return (
    <div className="mt-8">
      <h2 className="font-display text-lg font-bold uppercase text-foreground">
        Instructions
      </h2>
      <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-muted-foreground marker:font-semibold marker:text-foreground">
        {instructions.map((step) => (
          <li key={step} className="pl-1">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WorkoutInstructions;
