import { PiecePresets } from "@/types/piecePresets";

export const handleGetPresets = async () => {
  try {
    const req = await fetch("http://localhost:3000/presets", {
      method: "GET",
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const handleNewPreset = async (
  presetName: string | undefined,
  presetCategory: string
) => {
  try {
    const req = await fetch("http://localhost:3000/presets", {
      method: "POST",
      body: JSON.stringify({ presetName, presetCategory }),
      headers: { "Content-Type": "application/json" },
    });
    const res = await req.json();
    console.log(res.message);
  } catch (error) {
    console.error(error);
  }
};

export const handleDeletePreset = async () => {
  try {
  } catch (error) {
    console.error(error);
  }
};
