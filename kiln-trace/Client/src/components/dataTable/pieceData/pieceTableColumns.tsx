import { useState } from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { format } from "date-fns";

import { Piece } from "@/types/piece";
import PieceFormDialogContents from "../../dialogs/pieceForm/pieceFormDialogContents";
import ArrayCellPopoverCard from "./arrayCellPopoverCard";

export const pieceColumns: ColumnDef<Piece>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        name="select-check"
        aria-label="Select all"
        className="rounded"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        onClick={(e) => {
          e.stopPropagation();
        }}
        aria-label="Select row"
        className="rounded"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <>{row.original.date && format(row.original.date, "MM/dd/yy")}</>;
    },
    sortingFn: "datetime",
  },
  {
    accessorKey: "title",
    header: "Title",
    filterFn: "fuzzy",
    enableGlobalFilter: true,
    cell: ({ row }) => {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <span className="line-clamp-1 text-left">
                {row.original.title}
              </span>
            </TooltipTrigger>
            <TooltipContent
              className="bg-background border border-primary rounded p-2 shadow-custom"
              align="start"
              alignOffset={8}
              sideOffset={12}
            >
              {row.original.title}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    accessorKey: "artist",
    header: "Artist",
    filterFn: "fuzzy",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "stage",
    header: "Stage",
    cell: ({ row }) => {
      return <>{row.original.stage}</>;
    },
    filterFn: "fuzzy",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "form",
    header: "Form",
    filterFn: "fuzzy",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "method",
    header: "Method",
    filterFn: "fuzzy",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "material",
    header: "Material",
    filterFn: "fuzzy",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "weight",
    header: "Weight",
    cell: ({ row }) => {
      return <>{row.original.weight ? row.original.weight : ""}</>;
    },
  },
  {
    accessorKey: "dimensions",
    header: "Dimensions",
    cell: ({ row }) => {
      return <>{row.original.dimensions}</>;
    },
  },
  {
    accessorKey: "glaze",
    accessorFn: (row) => {
      return [...row.innerGlaze, ...row.outerGlaze];
    },
    header: "Glaze",
    cell: ({ row }) => {
      return (
        <>
          <Popover>
            <PopoverTrigger onClick={(e) => e.stopPropagation()}>
              {row.original.innerGlaze?.[0]
                ? row.original.innerGlaze?.[0]
                : row.original.outerGlaze?.[0]}{" "}
              {row.original.innerGlaze.length > 1 && "..."}
            </PopoverTrigger>
            <PopoverContent className="rounded bg-accent shadow-custom border-none focus:!outline-none">
              <ArrayCellPopoverCard
                glazeType="glaze"
                contents={{
                  innerGlaze: row.original.innerGlaze,
                  outerGlaze: row.original.outerGlaze,
                }}
              />
            </PopoverContent>
          </Popover>
        </>
      );
    },
    filterFn: "custom",
    enableGlobalFilter: true,
    enableColumnFilter: true,
  },
  {
    accessorKey: "underglaze",
    accessorFn: (row) => {
      return [...row.innerUnderglaze, ...row.outerUnderglaze];
    },
    header: "Underglaze",
    cell: ({ row }) => {
      return (
        <>
          <Popover>
            <PopoverTrigger onClick={(e) => e.stopPropagation()}>
              {row.original.innerUnderglaze?.[0]
                ? row.original.innerUnderglaze?.[0]
                : row.original.outerUnderglaze?.[0]}{" "}
              {row.original.innerUnderglaze.length > 1 && "..."}
            </PopoverTrigger>
            <PopoverContent className="rounded bg-accent shadow-custom border-none focus:!outline-none">
              <ArrayCellPopoverCard
                glazeType="underglaze"
                contents={{
                  innerUnderglaze: row.original.innerUnderglaze,
                  outerUnderglaze: row.original.outerUnderglaze,
                }}
              />
            </PopoverContent>
          </Popover>
        </>
      );
    },
    filterFn: "custom",
    // filterFn: "custom",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "slip",
    accessorFn: (row) => {
      return [...row.innerSlip, ...row.outerSlip];
    },
    header: "Slip",
    cell: ({ row }) => {
      return (
        <>
          <Popover>
            <PopoverTrigger onClick={(e) => e.stopPropagation()}>
              {row.original.innerSlip?.[0]
                ? row.original.innerSlip?.[0]
                : row.original.outerSlip?.[0]}{" "}
              {row.original.innerSlip.length > 1 && "..."}
            </PopoverTrigger>
            <PopoverContent className="rounded bg-accent shadow-custom border-none focus:!outline-none">
              <ArrayCellPopoverCard
                glazeType="slip"
                contents={{
                  innerSlip: row.original.innerSlip,
                  outerSlip: row.original.outerSlip,
                }}
              />
            </PopoverContent>
          </Popover>
        </>
      );
    },
    filterFn: "custom",
    enableColumnFilter: true,
    enableGlobalFilter: true,
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: ({ row }) => {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <span className="line-clamp-2 text-left">
                {row.original.notes}
              </span>
            </TooltipTrigger>
            <TooltipContent
              className="bg-background border border-primary rounded p-2 shadow-custom max-w-80"
              align="end"
              alignOffset={8}
              sideOffset={12}
            >
              <span className="max-w-40">{row.original.notes}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ table, row }) => {
      let meta: any;
      if (table.options.meta) meta = table.options.meta as any;
      const [open, setOpen] = useState<boolean>(false);
      const [dialogOpen, setDialogOpen] = useState<boolean>(false);
      return (
        <div>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 rounded">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className=" bg-background rounded">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDialogOpen(!dialogOpen);
                  setOpen(!open);
                }}
              >
                Edit Piece
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  meta.handleDeletePiece(row.original._id, meta.dispatch);
                  setOpen(!open);
                }}
              >
                Delete Piece
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* edit piece dialog */}
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="piece-dialog shadow-inset-custom-lg">
              <PieceFormDialogContents
                setOpen={setDialogOpen}
                piece={row.original}
                handleSubmit={meta.handleEditPiece}
              />
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
