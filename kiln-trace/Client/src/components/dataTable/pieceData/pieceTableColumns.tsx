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
} from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { format } from "date-fns";

import { Piece } from "@/types/piece";
import PieceFormDialogContents from "../../dialogs/pieceForm/pieceFormDialogContents";

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
        aria-label="Select all"
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
        className="z-[500]"
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
              <span className="line-clamp-1">{row.original.title}</span>
            </TooltipTrigger>
            <TooltipContent
              className="bg-background border border-primary rounded p-1 shadow-custom"
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
    header: "Glaze",
    cell: ({ row }) => {
      return <>{row.original.innerGlaze?.[0]}</>;
    },
    filterFn: "fuzzy",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "underglaze",
    header: "Underglaze",
    cell: ({ row }) => {
      return <>{row.original.innerUnderglaze?.[0]}</>;
    },
    filterFn: "fuzzy",
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
              <span className="line-clamp-2">{row.original.notes}</span>
            </TooltipTrigger>
            <TooltipContent
              className="bg-background border border-primary rounded p-1 shadow-custom max-w-80"
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
