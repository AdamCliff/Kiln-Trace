// import { PiecePresets } from "@/types/piecePresets";
import { presetActionTypes } from "@/context/presetActionEnums";
import React from "react";

export const handleLoadPresets = async (dispatch: React.Dispatch<any>) => {
  try {
    const req = await fetch("http://localhost:3000/presets", {
      method: "GET",
    });
    const [res] = await req.json();
    dispatch({
      type: presetActionTypes.LOAD_PRESETS,
      payload: res,
    });
  } catch (error) {
    console.error(error);
  }
};

export const handleNewPreset = async (
  presetName: string | undefined,
  presetCategory: string,
  dispatch: React.Dispatch<any>
) => {
  try {
    const req = await fetch("http://localhost:3000/presets", {
      method: "POST",
      body: JSON.stringify({ presetName, presetCategory }),
      headers: { "Content-Type": "application/json" },
    });
    const res = await req.json();
    dispatch({ type: presetActionTypes.ADD_PRESET, payload: res });
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
