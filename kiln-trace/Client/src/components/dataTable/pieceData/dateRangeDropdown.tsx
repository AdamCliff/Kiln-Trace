import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ColumnFiltersState } from "@tanstack/react-table";

function DateRangeDropdown({
  setColumnFilters,
}: {
  setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
}) {
  const onFilterChange = (id: string, value: string) => {
    setColumnFilters((prev) =>
      prev.filter((f) => f.id !== id).concat({ id, value })
    );
  };

  const handleDateParse = (selection: string) => {
    const today = new Date();
    let targetDate = today;
    let targetDateString = "";
    switch (selection) {
      case "All Time": {
        break;
      }
      case "24 Hours": {
        targetDate = new Date(new Date().setDate(today.getDate() - 1));
        targetDateString = targetDate.toString();
        break;
      }
      case "3 Days": {
        targetDate = new Date(new Date().setDate(today.getDate() - 3));
        targetDateString = targetDate.toString();
        break;
      }
      case "7 Days": {
        targetDate = new Date(new Date().setDate(today.getDate() - 7));
        targetDateString = targetDate.toString();
        break;
      }
      case "14 Days": {
        targetDate = new Date(new Date().setDate(today.getDate() - 14));
        targetDateString = targetDate.toString();
        break;
      }
      case "30 Days": {
        targetDate = new Date(new Date().setDate(today.getDate() - 30));
        targetDateString = targetDate.toString();
        break;
      }
      case "3 Months": {
        targetDate = new Date(new Date().setDate(today.getDate() - 91));
        targetDateString = targetDate.toString();
        break;
      }
      case "6 Months": {
        targetDate = new Date(new Date().setDate(today.getDate() - 182));
        targetDateString = targetDate.toString();
        break;
      }
      case "1 Year": {
        targetDate = new Date(new Date().setDate(today.getDate() - 365));
        targetDateString = targetDate.toString();
        break;
      }
      default:
        console.log("default case");
    }
    return targetDateString;
  };

  return (
    <>
      <Select
        defaultValue="All Time"
        onValueChange={(val) => {
          onFilterChange("date", handleDateParse(val));
        }}
      >
        <SelectTrigger className="p-2 bg-background rounded shadow-custom border-none focus:ring-0 focus:ring-offset-0">
          <SelectValue defaultValue="All Time" placeholder="Date Range" />
        </SelectTrigger>
        <SelectContent className="flex items-center justify-center bg-background rounded border-none shadow-custom focus:shadow-custom focus:border-none focus:ring-0 focus:ring-offset-0 focus:!outline-0 !outline-0">
          <SelectGroup className="flex flex-col items-start justify-start gap-2 w-full">
            <SelectLabel className="flex items-center justify-start w-full p-1">
              <span className="w-fit h-fit">Date Range...</span>
            </SelectLabel>
            <div className="flex flex-col items-center justify-center gap-2 w-full p-1 rounded">
              <SelectItem
                value="All Time"
                className="cursor-pointer w-full py-1 focus:outline-none focus:outline-offset-0 transition-all focus:shadow-custom"
              >
                All Time
              </SelectItem>
              <SelectItem
                value="24 Hours"
                className="cursor-pointer w-full py-1 focus:outline-none focus:outline-offset-0 transition-all focus:shadow-custom"
              >
                24 Hours
              </SelectItem>
              <SelectItem
                value="3 Days"
                className="cursor-pointer w-full py-1 focus:outline-none focus:outline-offset-0 transition-all focus:shadow-custom"
              >
                3 Days
              </SelectItem>
              <SelectItem
                value="7 Days"
                className="cursor-pointer w-full py-1 focus:outline-none focus:outline-offset-0 transition-all focus:shadow-custom"
              >
                7 Days
              </SelectItem>
              <SelectItem
                value="14 Days"
                className="cursor-pointer w-full py-1 focus:outline-none focus:outline-offset-0 transition-all focus:shadow-custom"
              >
                14 Days
              </SelectItem>
              <SelectItem
                value="30 Days"
                className="cursor-pointer w-full py-1 focus:outline-none focus:outline-offset-0 transition-all focus:shadow-custom"
              >
                30 Days
              </SelectItem>
              <SelectItem
                value="3 Months"
                className="cursor-pointer w-full py-1 focus:outline-none focus:outline-offset-0 transition-all focus:shadow-custom"
              >
                3 Months
              </SelectItem>
              <SelectItem
                value="6 Months"
                className="cursor-pointer w-full py-1 focus:outline-none focus:outline-offset-0 transition-all focus:shadow-custom"
              >
                6 Months
              </SelectItem>
              <SelectItem
                value="1 Year"
                className="cursor-pointer w-full py-1 focus:outline-none focus:outline-offset-0 transition-all focus:shadow-custom"
              >
                1 Year
              </SelectItem>
            </div>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

export default DateRangeDropdown;
