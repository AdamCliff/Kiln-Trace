import * as React from "react";
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

function DatePicker(/* newDate: Date */) {
  const [date, setDate] = React.useState<Date>();

  // React.useEffect(() => {
  //   newDate ? setDate(newDate) : setDate(new Date());
  //   console.log(date);
  // });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          //   variant={"outline"}
          //   removed class stylings: ,!date && "text-muted-foreground"
          className={cn(
            "flex justify-between gap-2 h-min w-full p-0 bg-background hover:bg-background text-left font-normal"
          )}
        >
          <CalendarIcon className="w-4 h-4" />
          {date ? format(date, "MM-dd-yy") : <span></span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default DatePicker;
