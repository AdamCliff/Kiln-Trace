import { ColumnDef } from "@tanstack/react-table";

import { Piece } from "@/types/piece";
import {
  getCurrentStage,
  getCurrentStageDate,
} from "@/helpers/pieceHelperFunctions";

export const pieceColumns: ColumnDef<Piece>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: (entry) => {
      return (
        <span>
          {" "}
          {getCurrentStageDate(entry.row.original)
            ? getCurrentStageDate(entry.row.original)
            : "-- / -- / --"}
        </span>
      );
    },
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
    cell: (entry) => {
      return (
        <span>
          {" "}
          {getCurrentStage(entry.row.original)
            ? getCurrentStage(entry.row.original)
            : "-"}
        </span>
      );
    },
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
    cell: (entry) => {
      return (
        <span>
          {" "}
          {entry.row.original.pieceLength
            ? entry.row.original.pieceLength
            : "-"}
          {" x "}
          {entry.row.original.width ? entry.row.original.width : "-"}
          {" x "}
          {entry.row.original.height ? entry.row.original.height : "-"}
        </span>
      );
    },
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
    cell: (entry) => {
      return <button onClick={() => console.log(entry)}>btn</button>;
      //   return <button onClick={() => handleEdit(row.row.original._id)}>btn</button>;
    },
  },
  {
    accessorKey: "delete",
    header: "",
  },
];

// row.original may be useful for accessing piece data
