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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/layoutSwitch";
import { Checkbox } from "@/components/ui/checkbox";

import {
  handleDeletePiece,
  handleEditPiece,
} from "@/helpers/pieceHelperFunctions";
import { fuzzyFilter } from "@/helpers/tableFilterFunctions";
import { Piece } from "@/types/piece";
import { usePieceContext } from "@/context/piecesContext";
import DataTableCard from "@/components/dataTable/pieceData/dataTableCard";
import DataTableRow from "@/components/dataTable/pieceData/dataTableRow";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: any;
  // was TData[]
  // when is it TData[], in piecesList.tsx, the data param throws an error
}

function PiecesDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const { dispatch } = usePieceContext();

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [isRowListType, setIsRowListType] = useState<boolean>(true);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

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
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      sorting,
      columnFilters,
      globalFilter,
      columnVisibility,
      rowSelection,
    },
    meta: {
      dispatch: dispatch,
      handleDeletePiece: (id: string, dispatch: React.Dispatch<any>) =>
        handleDeletePiece(id, dispatch),
      handleEditPiece: (piece: Piece, dispatch: React.Dispatch<any>) =>
        handleEditPiece(piece, dispatch),
    },
  });

  // handle layout based on viewport
  useEffect(() => {
    // Function to update viewport width in state
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };

    // Add event listener to update viewport width on resize
    window.addEventListener("resize", updateViewportWidth);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="flex flex-col rounded shadow-custom mt-4 overflow-hidden">
      <div
        id="options"
        className="flex items-center justify-between py-4 px-2 bg-accent"
      >
        <div className="flex items-center justify-center gap-4">
          <Input
            id="globalFilter"
            placeholder="Search all columns..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(String(e.target.value))}
            className="w-96 rounded shadow-inset-custom border-none"
          />
          <div>date range picker</div>
        </div>

        {isRowListType && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="ml-auto rounded shadow-custom"
              >
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background rounded">
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
          className="justify-self-end bg-accent ml-4"
          checked={!isRowListType}
          onCheckedChange={() => {
            setIsRowListType(!isRowListType);
          }}
        />
      </div>

      <div className="py-6 px-2">
        {!isRowListType || viewportWidth <= 1024 ? (
          <div>
            <div id="cards" className="flex flex-wrap gap-4 px-4">
              {table.getRowModel().rows.map((row) => (
                <DataTableCard key={row.id} row={row} table={table} />
              ))}
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded border-b-4 border-accent border-opacity-50 shadow-inset-custom pb-[1px]">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    key={headerGroup.id}
                    className="bg-accent bg-opacity-50"
                  >
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
                  table.getRowModel().rows.map((row, i) => {
                    return (
                      <DataTableRow
                        key={row.id}
                        row={row}
                        table={table}
                        even={i % 2 !== 0 ? true : false}
                      />
                    );
                  })
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
          </div>
        )}
      </div>

      <div className="flex justify-between py-2 pr-4 bg-accent">
        <div className="flex flex-1 items-center text-sm text-muted-foreground font-semibold text-text px-4 py-4">
          <label className="flex items-center gap-2 cursor-pointer border-r border-text pr-4 mr-4">
            <Checkbox
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value) =>
                table.toggleAllPageRowsSelected(!!value)
              }
              aria-label="Select all"
              className="border-text"
            />
            <span className="font-semibold text-text">Select All</span>
          </label>
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} piece(s) selected.
        </div>
        <div
          id="pag-buttons"
          className="flex items-center justify-center gap-4 w-fit"
        >
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="rounded shadow-custom"
          >
            Prev
          </Button>
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="rounded shadow-custom"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PiecesDataTable;
