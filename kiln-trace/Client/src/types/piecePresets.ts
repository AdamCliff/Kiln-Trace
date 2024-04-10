export interface Preset {
  preset: string;
  _id: string;
}

export interface PresetType {
  presets: Preset[];
}

export interface PiecePresets {
  // formPresets: string[];
  // methodPresets: string[];
  // materialPresets: string[];
  // glazePresets: string[];
  // slipPresets: string[];
  // artistPrests: string[];
  formPresets: { [presetName: string]: PresetType };
  methodPresets: { [presetName: string]: PresetType };
  materialPresets: { [presetName: string]: PresetType };
  glazePresets: { [presetName: string]: PresetType };
  slipPresets: { [presetName: string]: PresetType };
  artistPresets: { [presetName: string]: PresetType };
}
