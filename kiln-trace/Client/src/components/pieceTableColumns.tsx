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
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { format } from "date-fns";

import { Piece } from "@/types/piece";
import PieceFormDialogContents from "./pieceFormDialogContents";

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
        aria-label="Select row"
        className="z-50"
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
      return <>{row.original.glaze.inner}</>;
    },
    filterFn: "fuzzy",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "underglaze",
    header: "Underglaze",
    cell: ({ row }) => {
      return <>{row.original.underglaze.inner}</>;
    },
    filterFn: "fuzzy",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "notes",
    header: "Notes",
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
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className=" bg-background">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  setDialogOpen(!dialogOpen);
                  setOpen(!open);
                }}
              >
                Edit Piece
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  meta.handleDeletePiece(row.original._id, meta.dispatch);
                }}
              >
                Delete Piece
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* edit piece dialog */}
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent>
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
