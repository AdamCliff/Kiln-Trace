import { ColumnDef } from "@tanstack/react-table";

import { Piece } from "@/types/piece";
import { ReactNode } from "react";

export const pieceColumns: ColumnDef<Piece>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "artist",
    header: "Artist",
  },
  {
    accessorKey: "stage",
    header: "Stage",
  },
  {
    accessorKey: "form",
    header: "Form",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
  {
    accessorKey: "material",
    header: "Material",
  },
  {
    accessorKey: "weight",
    header: "Weight",
  },
  {
    accessorKey: "dimensions",
    header: "Dimensions",
  },
  {
    accessorKey: "overglaze",
    header: "Overglaze",
  },
  {
    accessorKey: "underglaze",
    header: "Underglaze",
  },
  {
    accessorKey: "notes",
    header: "Notes",
  },
  {
    accessorKey: "edit",
    header: "",
    cell: (row) => {
      return <button onClick={() => console.log(row)}>btn</button>;
      //   return <button onClick={() => handleEdit(row.row.original._id)}>btn</button>;
    },
  },
  {
    accessorKey: "delete",
    header: "",
  },
];

// row.original may be useful for accessing piece data
