import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SortKey = "duration" | "calories" | "rating";

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "duration", label: "Duration" },
  { value: "calories", label: "Calories" },
  { value: "rating", label: "Rating" },
];

type SortSelectProps = {
  value: SortKey;
  onChange: (value: SortKey) => void;
};

const SortSelect = ({ value, onChange }: SortSelectProps) => {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      Sort By
      <Select
        value={value}
        onValueChange={(next) => onChange(next as SortKey)}
      >
        <SelectTrigger className="h-9 w-36">
          <SelectValue>
            {(selected: SortKey) =>
              SORT_OPTIONS.find((option) => option.value === selected)?.label
            }
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {SORT_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortSelect;
