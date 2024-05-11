import { FilterFn, SortingFn, sortingFns } from "@tanstack/react-table";

import {
  RankingInfo,
  rankItem,
  compareItems,
} from "@tanstack/match-sorter-utils";

declare module "@tanstack/react-table" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
    custom: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

export const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // rank the Item
  const itemRank = rankItem(row.getValue(columnId), value);

  // store the itemRank info
  addMeta({ itemRank });

  // return if the item should be filtered in/out
  return itemRank.passed;
};

export const fuzzySort: SortingFn<any> = (rowA, rowB, ColumnId) => {
  let dir = 0;

  // only sort by rank if the column has ranking info
  if (rowA.columnFiltersMeta[ColumnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[ColumnId]?.itemRank!,
      rowB.columnFiltersMeta[ColumnId]?.itemRank!
    );
  }

  // provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, ColumnId) : dir;
};

export const customFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // get cell value
  // console.log(columnId);
  const cellValue = row.getValue(columnId);
  let joinedCells;

  console.log(row);
  console.log(cellValue);

  if (Array.isArray(cellValue)) {
    // console.log("cell is an array");
    joinedCells = cellValue.map((index) => index).join(" ");
  }

  // rank the Item
  const itemRank = rankItem(/* row.getValue(columnId) */ joinedCells, value);

  // store the itemRank info
  addMeta({ itemRank });

  // return if the item should be filtered in/out
  return itemRank.passed;
};
