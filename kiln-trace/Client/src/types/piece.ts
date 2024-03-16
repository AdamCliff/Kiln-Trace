// piece interface
export interface Piece {
  artist: string;
  formed: boolean;
  formedDate: Date;
  trimmed: boolean;
  trimmedDate: Date;
  bisqued: boolean;
  bisquedDate: Date;
  glazed: boolean;
  glazedDate: Date;
  fired: boolean;
  firedDate: Date;
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
