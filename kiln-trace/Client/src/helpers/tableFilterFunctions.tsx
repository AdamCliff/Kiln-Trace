import { FilterFn, SortingFn, sortingFns } from "@tanstack/react-table";

import {
  RankingInfo,
  rankItem,
  compareItems,
} from "@tanstack/match-sorter-utils";

declare module "@tanstack/react-table" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
    globalFuzzy: FilterFn<unknown>;
    orFuzzy: FilterFn<unknown>;
    dateRange: FilterFn<unknown>;
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

export const orLogicFuzzyFilter: FilterFn<any> = (
  row,
  columnId,
  value,
  addMeta
) => {
  console.log(row.getValue(columnId));

  // rank the Item
  const itemRank = rankItem(row.getValue(columnId), value);

  if (
    !itemRank.passed &&
    row.original?.[columnId] !== "" &&
    value.includes(row.original?.[columnId])
  ) {
    itemRank.passed = true;
  }

  // store the itemRank info
  addMeta({ itemRank });

  // return if the item should be filtered in/out
  return itemRank.passed;
};

export const globalFuzzyFilter: FilterFn<any> = (
  row,
  columnId,
  value,
  addMeta
) => {
  // rank the Item
  const itemRank = rankItem(row.getValue(columnId), value);

  // normalize filter value and column value to check without case sensitivity
  let normalizedValue = value.toLowerCase();
  let normalizedColValue = (row.getValue(columnId) as string)?.toLowerCase();

  // adjust passing boolean based on the column value's inclusion as a substring in the filter value
  if (
    !itemRank.passed &&
    row.original?.[columnId] !== "" &&
    normalizedColValue !== "" &&
    normalizedValue.includes(normalizedColValue)
  ) {
    itemRank.passed = true;
  }

  // store the itemRank info
  addMeta({ itemRank });

  // return if the item should be filtered in/out
  return itemRank.passed;
};

export const dateRangeFilter: FilterFn<any> = (
  row,
  columnId,
  value,
  addMeta
) => {
  // rank the Item
  const itemRank = rankItem(row.getValue(columnId), value);

  // get current date, date of piece, and target date range bound
  let today = new Date();
  let pieceDate = new Date(row.getValue(columnId));
  let dateRange = new Date(value);

  // if the piece date is between the current and bound dates, set passed to true
  if (pieceDate >= dateRange && pieceDate <= today) itemRank.passed = true;

  // store the itemRank info
  addMeta({ itemRank });

  // return if the item should be filtered in/out
  return itemRank.passed;
};
