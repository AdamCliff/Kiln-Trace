import { useEffect, useState } from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/layoutSwitch";

import {
  getCurrentStage,
  getCurrentStageDate,
  handleDeletePiece,
  handleEditPiece,
} from "@/helpers/pieceHelperFunctions";
import { Piece } from "@/types/piece";
import { usePieceContext } from "@/context/piecesContext";
import DataTableCard from "@/components/dataTableCard";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: any;
  // was TData[]
  // when is it TData[], in piecesList.tsx, the data param throws an error
}

export function DataTableWithCards<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const { dispatch } = usePieceContext();

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const [isRowListType, setIsRowListType] = useState<boolean>(true);
  // const [rowVisibleColumns, setRowVisibleColumns] = useState<>();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
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
  {
    /* make the filter global- check tanstack global filtering */
  }

  return (
    <div>
      <div id="options" className="flex items-center justify-between py-4">
        <div className="flex items-center justify-center gap-4">
          <Input
            placeholder="Filter titles..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(e) =>
              table.getColumn("title")?.setFilterValue(e.target.value)
            }
            className="w-96"
          />
          <div>date range picker</div>
        </div>

        {isRowListType && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        <Switch
          className="justify-self-end bg-primary ml-4"
          checked={!isRowListType}
          onCheckedChange={() => {
            setIsRowListType(!isRowListType);
          }}
        />
      </div>

      {isRowListType && (
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}

      {!isRowListType && (
        <div>
          <div id="cards" className="flex flex-wrap gap-4 px-4">
            {table.getRowModel().rows.map((row) => (
              <DataTableCard key={row.id} row={row} table={table} />
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-1 items-center text-sm text-muted-foreground px-4 py-4">
        <span className="mr-4">
          {table
            .getHeaderGroups()
            .map((headerGroup) => {
              return headerGroup.headers.at(0)
                ? headerGroup.headers.at(0)
                : console.error("Error: Select header not found");
            })
            .map((header: any) => {
              const { column, getContext } = header;
              return (
                <label className="flex items-center gap-2 cursor-pointer border-r border-primary pr-4">
                  {flexRender(column.columnDef.header, getContext())}
                  <span className="font-semibold text-text">Select All</span>
                </label>
              );
            })}
        </span>
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div
        id="pag-buttons"
        className="flex items-center justify-center gap-4 w-full"
      >
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Prev
        </Button>
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
