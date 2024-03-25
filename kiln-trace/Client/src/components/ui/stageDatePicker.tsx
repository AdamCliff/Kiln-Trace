import * as React from "react";
import { useEffect } from "react";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function StageDatePicker({
  isStageSelected,
  newDate,
  updateDate,
}: {
  isStageSelected: boolean;
  newDate: Date | undefined;
  updateDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}) {
  const [date, setDate] = React.useState<Date | undefined>();

  useEffect(() => {
    newDate ? setDate(newDate) : setDate(undefined);
  }, [newDate]);

  useEffect(() => {
    isStageSelected === false ? setDate(undefined) : "";
  }, [isStageSelected]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "flex justify-between gap-2 h-min w-full p-0 bg-background hover:bg-background text-left font-normal"
          )}
          onClick={() => {
            const tempDate = new Date();
            setDate(tempDate);
            updateDate(tempDate);
          }}
        >
          <CalendarIcon className="w-4 h-4" />
          {date && isStageSelected ? format(date, "MM/dd/yy") : ""}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            date ? setDate(date) : console.error("Date could not be selected");
            date
              ? updateDate(date)
              : console.error("Date could not be selected");
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default StageDatePicker;
