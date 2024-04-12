export interface Preset {
  preset: string;
  _id: string;
}

export interface Presets {
  presets: Preset[];
}

export interface PiecePresets {
  // formPresets: string[];
  // methodPresets: string[];
  // materialPresets: string[];
  // glazePresets: string[];
  // slipPresets: string[];
  // artistPrests: string[];
  formPresets: { [presetName: string]: Presets };
  methodPresets: { [presetName: string]: Presets };
  materialPresets: { [presetName: string]: Presets };
  glazePresets: { [presetName: string]: Presets };
  slipPresets: { [presetName: string]: Presets };
  artistPresets: { [presetName: string]: Presets };
}
