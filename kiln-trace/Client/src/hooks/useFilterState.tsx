import { useState, useEffect } from "react";
import { Filters } from "../types/filters";

const useFiltersState = (initialFilters?: Filters | null) => {
  const [filters, setFilters] = useState<Filters>({
    formFilters: "",
    methodFilters: "",
    materialFilters: "",
    glazeFilters: "",
    underglazeFilters: "",
    slipFilters: "",
    artistFilters: "",
    ...initialFilters,
  });

  useEffect(() => {
    if (initialFilters) {
      setFilters(initialFilters);
    }
  }, [initialFilters]);

  const updateFilters = (updatedFilters: Partial<Filters>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...updatedFilters,
    }));
    console.log("updated filters");
    console.log(updatedFilters);
    console.log("update filters");
    console.log(filters);
  };

  return {
    filters,
    updateFilters,
  };
};

export default useFiltersState;
