// piece interface
export interface Piece {
  artist: string;
  formed: boolean;
  trimmed: boolean;
  bisqued: boolean;
  glazed: boolean;
  fired: boolean;
  form: string;
  method: string;
  weight: number;
  height: number;
  pieceLength: number;
  width: number;
  notes: string;
  overglaze: string[];
  photos: string;
  title: string;
  date: Date;
  underglaze: string[];
  __v: number;
  _id: string;
}
