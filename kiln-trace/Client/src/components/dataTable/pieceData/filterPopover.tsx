import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/dataTable/pieceData/filterSwitch";
import { ColumnFiltersState } from "@tanstack/react-table";

import FilterSelector from "./filterSelector";
import { filterActionTypes } from "@/context/filterActionEnums";
import { Filters } from "@/types/filters";

function FilterPopover({
  columnFilters,
  setColumnFilters,
  selectFilter,
  setSelectFilters,
  filtersDispatch,
}: {
  columnFilters: ColumnFiltersState;
  setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
  selectFilter: string;
  setSelectFilters: React.Dispatch<React.SetStateAction<string>>;
  filtersDispatch: React.Dispatch<any>;
}) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isAny, setIsAny] = useState<boolean>(isChecked);

  const onCheckedChange = () => {
    let check = !isChecked;
    setIsChecked(check);
    setIsAny(check);
  };

  const onFilterChange = (id: string, value: string) => {
    if (!isAny || id === "glaze" || id === "underglaze" || id === "slip")
      setSelectFilters(value);
    if (isAny)
      setColumnFilters((prev) =>
        prev.filter((f) => f.id !== id).concat({ id, value })
      );
    filtersDispatch({
      type: filterActionTypes.UPDATE_CURRENT_FILTERS,
      payload: { [`${id}Filters`]: value },
    });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-background rounded p-2 shadow-custom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-text"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background rounded shadow-custom w-fit min-w-48 h-fit max-h-[32rem] pb-2 space-y-2 overflow-scroll overflow-x-hidden scroll-hidden">
          <Accordion type="multiple" className="w-full min-w-48">
            <div className="flex justify-between items-center">
              <DropdownMenuLabel>Filter By...</DropdownMenuLabel>
              <Switch checked={isChecked} onCheckedChange={onCheckedChange} />
            </div>
            <DropdownMenuSeparator />
            {/* NEED TO CREATE STAGE PRESETS FOR THIS TO WORK */}
            {/* <DropdownMenuItem
              onClick={(e) => e.preventDefault()}
              className="p-0 rounded focus:!bg-background hover:!outline-none"
            >
              <div className="w-full min-w-48 mx-1">
                <AccordionItem
                  value="stage-filter"
                  className="border-none focus:bg-none hover:bg-none"
                >
                  <AccordionTrigger className="accordian-trigger !py-1 !px-2 !bg-opacity-100 w-full focus:bg-none hover:bg-none">
                    Stage
                  </AccordionTrigger>
                  <AccordionContent className="accordian-content w-full rounded-b focus:bg-none hover:bg-none">
                    <FilterSelector
                      isAny={isAny}
                      handleFilterChange={onFilterChange}
                      presetTarget="stagePresets"
                      filterTarget="stageFilters"
                      presetCategory="stage"
                    />
                  </AccordionContent>
                </AccordionItem>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator /> */}
            <DropdownMenuItem
              onClick={(e) => e.preventDefault()}
              className="p-0 rounded focus:!bg-background hover:!outline-none"
            >
              <div className="w-full min-w-48 mx-1">
                <AccordionItem
                  value="form-filter"
                  className="border-none focus:bg-none hover:bg-none"
                >
                  <AccordionTrigger className="accordian-trigger !py-1 !px-2 !bg-opacity-100 w-full focus:bg-none hover:bg-none">
                    Form
                  </AccordionTrigger>
                  <AccordionContent className="accordian-content w-full rounded-b focus:bg-none hover:bg-none">
                    <FilterSelector
                      isAny={isAny}
                      handleFilterChange={onFilterChange}
                      presetTarget="formPresets"
                      filterTarget="formFilters"
                      presetCategory="form"
                    />
                  </AccordionContent>
                </AccordionItem>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={(e) => e.preventDefault()}
              className="p-0 rounded focus:!bg-background hover:!outline-none"
            >
              <div className="w-full min-w-48 mx-1">
                <AccordionItem
                  value="method-filter"
                  className="border-none focus:bg-none hover:bg-none"
                >
                  <AccordionTrigger className="accordian-trigger !py-1 !px-2 !bg-opacity-100 w-full focus:bg-none hover:bg-none">
                    Method
                  </AccordionTrigger>
                  <AccordionContent className="accordian-content w-full rounded-b focus:bg-none hover:bg-none">
                    <FilterSelector
                      isAny={isAny}
                      handleFilterChange={onFilterChange}
                      presetTarget="methodPresets"
                      filterTarget="methodFilters"
                      presetCategory="method"
                    />
                  </AccordionContent>
                </AccordionItem>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={(e) => e.preventDefault()}
              className="p-0 rounded focus:!bg-background hover:!outline-none"
            >
              <div className="w-full min-w-48 mx-1">
                <AccordionItem
                  value="material-filter"
                  className="border-none focus:bg-none hover:bg-none"
                >
                  <AccordionTrigger className="accordian-trigger !py-1 !px-2 !bg-opacity-100 w-full focus:bg-none hover:bg-none">
                    Material
                  </AccordionTrigger>
                  <AccordionContent className="accordian-content w-full rounded-b focus:bg-none hover:bg-none">
                    <FilterSelector
                      isAny={isAny}
                      handleFilterChange={onFilterChange}
                      presetTarget="materialPresets"
                      filterTarget="materialFilters"
                      presetCategory="material"
                    />
                  </AccordionContent>
                </AccordionItem>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={(e) => e.preventDefault()}
              className="p-0 rounded focus:!bg-background hover:!outline-none"
            >
              <div className="w-full min-w-48 mx-1">
                <AccordionItem
                  value="glaze-filter"
                  className="border-none focus:bg-none hover:bg-none"
                >
                  <AccordionTrigger className="accordian-trigger !py-1 !px-2 !bg-opacity-100 w-full focus:bg-none hover:bg-none">
                    Glaze
                  </AccordionTrigger>
                  <AccordionContent className="accordian-content w-full rounded-b focus:bg-none hover:bg-none">
                    <FilterSelector
                      isAny={isAny}
                      handleFilterChange={onFilterChange}
                      presetTarget="glazePresets"
                      filterTarget="glazeFilters"
                      presetCategory="glaze"
                    />
                  </AccordionContent>
                </AccordionItem>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={(e) => e.preventDefault()}
              className="p-0 rounded focus:!bg-background hover:!outline-none"
            >
              <div className="w-full min-w-48 mx-1">
                <AccordionItem
                  value="underglaze-filter"
                  className="border-none focus:bg-none hover:bg-none"
                >
                  <AccordionTrigger className="accordian-trigger !py-1 !px-2 !bg-opacity-100 w-full focus:bg-none hover:bg-none">
                    Underglaze
                  </AccordionTrigger>
                  <AccordionContent className="accordian-content w-full rounded-b focus:bg-none hover:bg-none">
                    <FilterSelector
                      isAny={isAny}
                      handleFilterChange={onFilterChange}
                      presetTarget="underglazePresets"
                      filterTarget="underglazeFilters"
                      presetCategory="underglaze"
                    />
                  </AccordionContent>
                </AccordionItem>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={(e) => e.preventDefault()}
              className="p-0 rounded focus:!bg-background hover:!outline-none"
            >
              <div className="w-full min-w-48 mx-1">
                <AccordionItem
                  value="slip-filter"
                  className="border-none focus:bg-none hover:bg-none"
                >
                  <AccordionTrigger className="accordian-trigger !py-1 !px-2 !bg-opacity-100 w-full focus:bg-none hover:bg-none">
                    Slip
                  </AccordionTrigger>
                  <AccordionContent className="accordian-content w-full rounded-b focus:bg-none hover:bg-none">
                    <FilterSelector
                      isAny={isAny}
                      handleFilterChange={onFilterChange}
                      presetTarget="slipPresets"
                      filterTarget="slipFilters"
                      presetCategory="slip"
                    />
                  </AccordionContent>
                </AccordionItem>
              </div>
            </DropdownMenuItem>
          </Accordion>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default FilterPopover;
