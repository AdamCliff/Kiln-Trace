import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  getCurrentStage,
  getCurrentStageDate,
  handleDeletePiece,
  handleEditPiece,
} from "@/helpers/pieceHelperFunctions";
import { Piece } from "@/types/piece";
import { usePieceContext } from "@/context/piecesContext";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: any;
  // was TData[]
  // when is it TData[], in piecesList.tsx, the data param throws an error
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const { dispatch } = usePieceContext();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      dispatch: dispatch,
      getCurrentStage: (piece: Piece) => getCurrentStage(piece),
      getCurrentStageDate: (piece: Piece) => getCurrentStageDate(piece),
      handleDeletePiece: (id: string, dispatch: React.Dispatch<any>) =>
        handleDeletePiece(id, dispatch),
      handleEditPiece: (piece: Piece, dispatch: React.Dispatch<any>) =>
        handleEditPiece(piece, dispatch),
    },
  });

  return (
    <div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
