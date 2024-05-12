export interface Preset {
  preset: string;
  _id: string;
}

// export interface Presets {
//   presets: Preset[];
// }

// export type Presets = Preset[];

export interface PiecePresets {
  formPresets: Preset[];
  methodPresets: Preset[];
  materialPresets: Preset[];
  glazePresets: Preset[];
  underglazePresets: Preset[];
  slipPresets: Preset[];
  artistPresets: Preset[];
}

/* old preset setup */
// formPresets: { [presetName: string]: /* Presets */ Preset[] };
// methodPresets: { [presetName: string]: /* Presets */ Preset[] };
// materialPresets: { [presetName: string]: /* Presets */ Preset[] };
// glazePresets: { [presetName: string]: /* Presets */ Preset[] };
// underglazePresets: { [presetName: string]: /* Presets */ Preset[] };
// slipPresets: { [presetName: string]: /* Presets */ Preset[] };
// artistPresets: { [presetName: string]: /* Presets */ Preset[] };
