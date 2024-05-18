export interface Preset {
  preset: string;
  _id: string;
}

export interface PiecePresets {
  stagePresets: Preset[];
  formPresets: Preset[];
  methodPresets: Preset[];
  materialPresets: Preset[];
  glazePresets: Preset[];
  underglazePresets: Preset[];
  slipPresets: Preset[];
  artistPresets: Preset[];
}
