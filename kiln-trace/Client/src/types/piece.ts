// import { Presets } from "./piecePresets";

// piece interface
export interface Piece {
  title: string;
  artist: string;
  photos: string;
  formed: boolean;
  formedDate: Date | undefined;
  trimmed: boolean;
  trimmedDate: Date | undefined;
  bisqued: boolean;
  bisquedDate: Date | undefined;
  glazed: boolean;
  glazedDate: Date | undefined;
  fired: boolean;
  firedDate: Date | undefined;
  stage?: string | undefined;
  date?: string | undefined;
  form: string;
  method: string;
  material: string;
  weight: number;
  height: number;
  pieceLength: number;
  width: number;
  dimensions?: number | undefined;
  notes: string;
  innerGlaze: string[];
  innerUnderglaze: string[];
  innerSlip: string[];
  outerGlaze: string[];
  outerUnderglaze: string[];
  outerSlip: string[];
  glazes?: string;
  underglazes?: string;
  slips?: string;
  __v: number;
  _id: string;
}
