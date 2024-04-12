import { Presets } from "./piecePresets";

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
  // glaze: { inner?: string[]; outer?: string[] };
  // underglaze: { inner?: string[]; outer?: string[] };
  // slip: { inner?: string[]; outer?: string[] };
  innerGlaze: /* Presets */ string[];
  innerUnderglaze: /* Presets */ string[];
  innerSlip: /* Presets */ string[];
  outerGlaze: /* Presets */ string[];
  outerUnderglaze: /* Presets */ string[];
  outerSlip: /* Presets */ string[];
  __v: number;
  _id: string;
}

export interface GlazeLayer {
  inner: string[];
  outer: string[];
}
