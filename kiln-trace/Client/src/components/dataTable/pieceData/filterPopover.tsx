import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ColumnFiltersState } from "@tanstack/react-table";

import FilterSelector from "./filterSelector";

function FilterPopover({
  columnFilters,
  setColumnFilters,
}: {
  columnFilters: ColumnFiltersState;
  setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
}) {
  const searchValue = columnFilters?.find((f) => f.id === "glaze")?.value || "";

  const onFilterChange = (id: string, value: string) =>
    setColumnFilters((prev) =>
      prev.filter((f) => f.id !== id).concat({ id, value })
    );

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-background rounded p-2">
          Filters
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background rounded shadow-custom w-fit min-w-48 h-fit pb-2 space-y-2">
          <DropdownMenuLabel>Filter By</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={(e) => e.preventDefault()}
            className="p-0 rounded focus:!bg-background hover:!outline-none"
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="filter"
                className="border-none focus:bg-none hover:bg-none"
              >
                <AccordionTrigger className="accordian-trigger !py-1 !px-2 !bg-opacity-100 w-full focus:bg-none hover:bg-none">
                  A Filter
                </AccordionTrigger>
                <AccordionContent className="accordian-content w-full rounded-b focus:bg-none hover:bg-none">
                  <FilterSelector filterTarget="formPresets" />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </DropdownMenuItem>
          {/* <DropdownMenuItem
            onClick={(e) => e.preventDefault()}
            className="w-full focus:!bg-transparent focus:!outline-none"
          >
            <FilterSelector filterTarget="formPresets" />
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default FilterPopover;
