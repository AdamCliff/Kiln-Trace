import { Input } from "@/components/ui/input";
import { ColumnFiltersState } from "@tanstack/react-table";

function Filters({
  columnFilters,
  setColumnFilters,
}: {
  columnFilters: ColumnFiltersState;
  setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
}) {
  const taskName = columnFilters.find((f) => f.id === "glaze")?.value || "";

  const onFilterChange = (id: string, value: string) =>
    setColumnFilters((prev) =>
      prev.filter((f) => f.id !== id).concat({ id, value })
    );

  //   console.log(columnFilters);

  return (
    <>
      <Input
        id="glaze-filter"
        type="text"
        placeholder="Look up a glaze..."
        className="text-field !bg-background !border-none"
        value={taskName as any}
        onChange={(e) => onFilterChange("glaze", e.target.value)}
      />
    </>
  );
}

export default Filters;
