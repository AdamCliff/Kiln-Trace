import { Input } from "@/components/ui/input";
import { ColumnFiltersState } from "@tanstack/react-table";

function Filters({
  columnFilters,
  setColumnFilters,
}: {
  columnFilters: ColumnFiltersState;
  setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
}) {
  const searchValue = columnFilters?.find((f) => f.id === "glaze")?.value || "";
  // const searchValue =
  //   columnFilters?.find(
  //     (f) => f.id === "glaze" || f.id === "underglaze" || f.id === "slip"
  //   )?.value || "";

  const onFilterChange = (id: string, value: string) =>
    setColumnFilters((prev) =>
      prev.filter((f) => f.id !== id).concat({ id, value })
    );

  return (
    <>
      <Input
        id="glaze-filter"
        type="text"
        placeholder="Look up a glaze..."
        className="text-field !bg-background !border-none"
        value={searchValue as any}
        onChange={(e) => {
          onFilterChange("glaze", e.target.value);
          // onFilterChange("underglaze", e.target.value);
          // onFilterChange("slip", e.target.value);
        }}
      />
    </>
  );
}

export default Filters;
