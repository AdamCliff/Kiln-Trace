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
  form: string;
  method: string;
  material: string;
  weight: number;
  height: number;
  pieceLength: number;
  width: number;
  notes: string;
  /* over */ glaze: string[];
  underglaze: string[];
  slip: string[];
  __v: number;
  _id: string;
}
