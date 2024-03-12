import { Piece } from "@/types/piece";

// fetch data
export const fetchData = async () => {
  try {
    const res: Response = await fetch("http://localhost:3000/pieces");
    const data: Piece[] | undefined = await res.json();
    if (!data) return new Error();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch piece list");
  }
};
