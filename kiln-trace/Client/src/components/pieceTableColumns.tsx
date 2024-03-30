import { useEffect, useState } from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
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

import { Piece } from "@/types/piece";
import PieceFormDialogContents from "./pieceFormDialogContents";
import { fuzzyFilter, fuzzySort } from "@/helpers/tableFilterFunctions";

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
    // header: "Date",
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
    cell: ({ table, row }) => {
      let meta;
      if (table.options.meta) meta = table.options.meta as any;
      const formattedDate = meta.getCurrentStageDate(row.original);
      return <span>{formattedDate ? formattedDate : "-- / -- / --"}</span>;
    },
    sortingFn: "alphanumeric",
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
    cell: ({ table, row }) => {
      let meta;
      if (table.options.meta) meta = table.options.meta as any;
      return (
        <span>
          {meta.getCurrentStage(row.original)
            ? meta.getCurrentStage(row.original)
            : "-"}
        </span>
      );
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
      return (
        <span>
          {row.original.pieceLength ? row.original.pieceLength : "-"}
          {" x "}
          {row.original.width ? row.original.width : "-"}
          {" x "}
          {row.original.height ? row.original.height : "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "overglaze",
    header: "Overglaze",
    filterFn: "fuzzy",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "underglaze",
    header: "Underglaze",
    filterFn: "fuzzy",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "notes",
    header: "Notes",
  },
  // {
  //   accessorKey: "edit",
  //   header: "",
  //   cell: ({ table, row }) => {
  //     let meta;
  //     if (table.options.meta) meta = table.options.meta as any;
  //     return (
  //       <PieceFormDialog
  //         piece={row.original}
  //         handleSubmit={meta.handleEditPiece}
  //       />
  //     );
  //   },
  // },
  // {
  //   accessorKey: "delete",
  //   header: "",
  //   cell: ({ table, row }) => {
  //     return (
  //       <button
  //         onClick={(e) => {
  //           let meta;
  //           if (table.options.meta) meta = table.options.meta as any;
  //           e.preventDefault();
  //           meta.handleDeletePiece(row.original._id, meta.dispatch);
  //         }}
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           strokeWidth="1.5"
  //           stroke="currentColor"
  //           className="w-6"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  //           />
  //         </svg>
  //       </button>
  //     );
  //   },
  // },
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
