// piece interface
export interface Piece {
  artist: string;
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
  overglaze: string[];
  photos: string;
  title: string;
  underglaze: string[];
  __v: number;
  _id: string;
}
