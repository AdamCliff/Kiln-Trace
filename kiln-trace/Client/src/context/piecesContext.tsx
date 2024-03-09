import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";

import { Piece } from "@/types/piece";

// create piece context
export const PieceContext = createContext<{
  pieces: Piece[] | undefined;
  setPieces: React.Dispatch<React.SetStateAction<Piece[] | undefined>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  fetchPieces: () => Promise<void>;
}>({
  pieces: undefined,
  setPieces: () => {},
  loading: false,
  setLoading: () => {},
  fetchPieces: async () => {},
});

// use context function
export const usePieceContext = () => {
  const pieces = useContext(PieceContext);

  if (pieces === undefined) {
    throw new Error("PieceContext must be defined");
  }

  return pieces;
};

// provider prop data type
type PieceContextProviderProps = {
  children: ReactNode;
};

// context provider
export const PieceContextProvider: React.FC<PieceContextProviderProps> = ({
  children,
}) => {
  // state variables
  const [pieces, setPieces] = useState<Piece[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  // fetch function to get piece list from db
  const fetchPieces = async () => {
    try {
      setLoading(true);

      const res: Response = await fetch("http://localhost:3000/pieces");
      const data: Piece[] | undefined = await res.json();
      setPieces(data);
    } catch (error) {
      throw new Error("Failed to fetch piece list");
    } finally {
      setLoading(false);
    }
  };

  // run fetch function on piece change
  // need to refine this so that there isn't a delay between when the piece is created and when it appears
  // will likely need to do this in another way other than adding it to server and then refetching
  // maybe add step where the piece is added locally at the same time it is sent to server?
  useEffect(() => {
    fetchPieces();
  }, [pieces]);

  // context values to be made available
  const contextData = {
    pieces,
    setPieces,
    loading,
    setLoading,
    fetchPieces,
  };

  return (
    <PieceContext.Provider value={contextData}>
      {children}
    </PieceContext.Provider>
  );
};
