import { PiecePresets } from "@/types/piecePresets";

export const handleSetDefaultPresets = async () => {
  try {
    const req = await fetch("http://localhost:3000/presets-new", {
      method: "POST",
    });
    const res = await req.json();
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

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
