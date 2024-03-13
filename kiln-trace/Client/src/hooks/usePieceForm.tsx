import { useEffect, useState } from "react";

import { Piece } from "@/types/piece";

interface PieceFormActions {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setArtist: React.Dispatch<React.SetStateAction<string>>;
  setFormed: React.Dispatch<React.SetStateAction<boolean>>;
  setTrimmed: React.Dispatch<React.SetStateAction<boolean>>;
  setBisqued: React.Dispatch<React.SetStateAction<boolean>>;
  setGlazed: React.Dispatch<React.SetStateAction<boolean>>;
  setFired: React.Dispatch<React.SetStateAction<boolean>>;
  setMethod: React.Dispatch<React.SetStateAction<string>>;
  setMaterial: React.Dispatch<React.SetStateAction<string>>;
  setForm: React.Dispatch<React.SetStateAction<string>>;
  setWeight: React.Dispatch<React.SetStateAction<number>>;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  setPieceLength: React.Dispatch<React.SetStateAction<number>>;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  setNotes: React.Dispatch<React.SetStateAction<string>>;
  setOverglaze: React.Dispatch<React.SetStateAction<string[]>>;
  setUnderglaze: React.Dispatch<React.SetStateAction<string[]>>;
  setPhotos: React.Dispatch<React.SetStateAction<string>>;
}

export type UsePieceFormReturnType = {
  values: Piece;
  actions: PieceFormActions;
};

const usePieceForm = (): UsePieceFormReturnType => {
  // state values
  const [title, setTitle] = useState<string>("");
  const [formed, setFormed] = useState<boolean>(false);
  const [trimmed, setTrimmed] = useState<boolean>(false);
  const [bisqued, setBisqued] = useState<boolean>(false);
  const [glazed, setGlazed] = useState<boolean>(false);
  const [fired, setFired] = useState<boolean>(false);
  const [method, setMethod] = useState<string>("");
  const [form, setForm] = useState<string>("");
  const [material, setMaterial] = useState<string>("");
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [pieceLength, setPieceLength] = useState<number>(0);
  const [overglaze, setOverglaze] = useState<string[]>([""]);
  const [underglaze, setUnderglaze] = useState<string[]>([""]);
  const [photos, setPhotos] = useState<string>("");
  const [artist, setArtist] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  //
  const values: Piece = {
    title,
    formed,
    trimmed,
    bisqued,
    glazed,
    fired,
    method,
    material,
    form,
    weight,
    height,
    width,
    pieceLength,
    overglaze,
    underglaze,
    photos,
    artist,
    notes,
  };

  const actions: PieceFormActions = {
    setTitle,
    setFormed,
    setTrimmed,
    setBisqued,
    setGlazed,
    setFired,
    setMethod,
    setMaterial,
    setForm,
    setWeight,
    setHeight,
    setWidth,
    setPieceLength,
    setOverglaze,
    setUnderglaze,
    setPhotos,
    setArtist,
    setNotes,
  };

  //   useEffect(() => console.log(values.title), [values.title]);

  return { values, actions };
};

export default usePieceForm;
