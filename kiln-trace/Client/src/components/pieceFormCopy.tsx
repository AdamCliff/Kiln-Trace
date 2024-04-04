import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import StageDatePicker from "@/components/ui/stageDatePicker";
import { Button } from "@/components/ui/button";

import { usePieceContext } from "../context/piecesContext";
import { Piece, GlazeLayer } from "@/types/piece";
import usePieceState from "../helpers/pieceInstance";

// change type later
function PieceFormDialogContents({
  setOpen,
  piece,
  handleSubmit,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  piece: any;
  handleSubmit: (piece: Piece, dispatch: React.Dispatch<any>) => Promise<any>;
}) {
  const [pieceState, updatePieceState] = usePieceState(piece);
  const { dispatch } = usePieceContext();

  const handleInputChange = (fieldName: string, value: any) => {
    console.log(pieceState);
    console.log(fieldName, value);
    updatePieceState((prevPieceState: any): any => ({
      ...prevPieceState,
      [fieldName]: value,
    }));
    console.log(pieceState);
  };

  // // if a date for stage completion is chosen before the stage box is checked, automatically set the date to new Date and check stage box
  // useEffect(() => {
  //   formedDate && !formed ? setFormed((formed) => !formed) : "";
  // }, [formedDate]);
  // useEffect(() => {
  //   trimmedDate && !trimmed ? setTrimmed((trimmed) => !trimmed) : "";
  // }, [trimmedDate]);
  // useEffect(() => {
  //   bisquedDate && !bisqued ? setBisqued((bisqued) => !bisqued) : "";
  // }, [bisquedDate]);
  // useEffect(() => {
  //   glazedDate && !glazed ? setGlazed((glazed) => !glazed) : "";
  // }, [glazedDate]);
  // useEffect(() => {
  //   firedDate && !fired ? setFired((fired) => !fired) : "";
  // }, [firedDate]);

  // // when a glaze is changed, update state interfaces
  // useEffect(() => {
  //   glazeState.inner = glazeInner;
  //   glazeState.outer = glazeOuter;
  //   setGlaze(glazeState);
  // }, [glazeInner, glazeOuter]);
  // useEffect(() => {
  //   underglazeState.inner = underglazeInner;
  //   underglazeState.outer = underglazeOuter;
  //   setUnderglaze(underglazeState);
  // }, [underglazeInner, underglazeOuter]);
  // useEffect(() => {
  //   slipState.inner = slipInner;
  //   slipState.outer = slipOuter;
  //   setSlip(slipState);
  // }, [slipInner, slipOuter]);

  return (
    <>
      <div id="piece-form">
        <DialogHeader className="mb-4">
          <DialogTitle>{piece ? "Edit Piece" : "New Piece"}</DialogTitle>
        </DialogHeader>
        <form
          action={`/pieces/${pieceState._id}`}
          method="put"
          className="flex flex-col gap-6 w-full h-[95%]"
        >
          {/* <div className="flex gap-2"> */}
          {/* about section */}
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              onChange={(e) => handleInputChange("title", e.target.value)}
              value={pieceState.title}
              className="border border-secondary rounded-[6px] px-2 py-1"
            />
          </div>
          {/* <div className="flex flex-col gap-2">
              <label htmlFor="artist">Artist</label>
              <input
                type="text"
                name="artist"
                id="artist"
                onChange={(e) => setArtist(e.target.value)}
                value={artist}
                className="border border-secondary rounded-[6px] px-2 py-1"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <label htmlFor="photos">Photos</label>
              <input
                type="file"
                name="photos"
                id="photos"
                onChange={(e) => setPhotos(e.target.value)}
                value={photos}
                className="w-[100px] overflow-hidden"
              />
            </div>
          </div> */}
          {/* stage section */}
          {/* <div id="stage" className="flex items-center justify-start gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <input
                  type="checkbox"
                  name="formed"
                  id="formed-stage"
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    setFormed(isChecked);
                    setFormedDate(isChecked ? new Date() : undefined);
                  }}
                  checked={formed}
                  className="border border-secondary rounded-[6px] px-2 py-1"
                />
                <label htmlFor="formed">Formed</label>
              </div>
              <StageDatePicker
                isStageSelected={formed}
                newDate={formedDate}
                updateDate={setFormedDate}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <input
                  type="checkbox"
                  name="trimmed"
                  id="trimmed-stage"
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    setTrimmed(isChecked);
                    setTrimmedDate(isChecked ? new Date() : new Date(""));
                  }}
                  checked={trimmed}
                  className="border border-secondary rounded-[6px] px-2 py-1"
                />
                <label htmlFor="trimmed">Trimmed</label>
              </div>
              <StageDatePicker
                isStageSelected={trimmed}
                newDate={trimmedDate}
                updateDate={setTrimmedDate}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <input
                  type="checkbox"
                  name="bisqued"
                  id="bisqued-stage"
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    setBisqued(isChecked);
                    setBisquedDate(isChecked ? new Date() : new Date(""));
                  }}
                  checked={bisqued}
                  className="border border-secondary rounded-[6px] px-2 py-1"
                />
                <label htmlFor="bisqued">Bisqued</label>
              </div>
              <StageDatePicker
                isStageSelected={bisqued}
                newDate={bisquedDate}
                updateDate={setBisquedDate}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <input
                  type="checkbox"
                  name="glazed"
                  id="glazed-stage"
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    setGlazed(isChecked);
                    setGlazedDate(isChecked ? new Date() : new Date(""));
                  }}
                  checked={glazed}
                  className="border border-secondary rounded-[6px] px-2 py-1"
                />
                <label htmlFor="glazed">Glazed</label>
              </div>
              <StageDatePicker
                isStageSelected={glazed}
                newDate={glazedDate}
                updateDate={setGlazedDate}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <input
                  type="checkbox"
                  name="fired"
                  id="fired-stage"
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    setFired(isChecked);
                    setFiredDate(isChecked ? new Date() : new Date(""));
                  }}
                  checked={fired}
                  className="border border-secondary rounded-[6px] px-2 py-1"
                />
                <label htmlFor="fired">Fired</label>
              </div>
              <StageDatePicker
                isStageSelected={fired}
                newDate={firedDate}
                updateDate={setFiredDate}
              />
            </div>
          </div> */}
          {/* details section */}
          {/* <Accordion
            type="single"
            collapsible
            defaultValue={form || method || material ? "details" : ""}
          >
            <AccordionItem value="details">
              <AccordionTrigger>Form, Method, Material</AccordionTrigger>
              <AccordionContent>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form">Form</label>
                    <input
                      type="text"
                      name="form"
                      id="form"
                      onChange={(e) => setForm(e.target.value)}
                      value={form}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="method">Method</label>
                    <input
                      type="text"
                      name="method"
                      id="pinch-made"
                      onChange={(e) => setMethod(e.target.value)}
                      value={method}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="material">Material</label>
                    <input
                      type="text"
                      name="material"
                      id="material"
                      onChange={(e) => setMaterial(e.target.value)}
                      value={material}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion> */}
          {/* dimensions section */}
          {/* <Accordion
            type="single"
            collapsible
            defaultValue={
              weight || height || pieceLength || width ? "dimensions" : ""
            }
          >
            <AccordionItem value="dimensions">
              <AccordionTrigger>Dimensions, Weight</AccordionTrigger>
              <AccordionContent>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="width">Width</label>
                    <input
                      type="text"
                      name="width"
                      id="width"
                      onChange={(e) => setWidth(+e.target.value)}
                      value={width}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="length">Length</label>
                    <input
                      type="text"
                      name="length"
                      id="length"
                      onChange={(e) => setPieceLength(+e.target.value)}
                      value={pieceLength}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="height">Height</label>
                    <input
                      type="text"
                      name="height"
                      id="height"
                      onChange={(e) => setHeight(+e.target.value)}
                      value={height}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weight">Weight</label>
                    <input
                      type="text"
                      name="weight"
                      id="weight"
                      onChange={(e) => setWeight(+e.target.value)}
                      value={weight}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion> */}
          {/* glazes section */}
          {/* <Accordion
            type="single"
            collapsible
            defaultValue={
              piece?.glaze.inner[0] ||
              piece?.glaze.outer[0] ||
              piece?.underglaze.inner[0] ||
              piece?.underglaze.outer[0] ||
              piece?.slip.inner[0] ||
              piece?.slip.outer[0]
                ? "glazes"
                : ""
            }
          >
            <AccordionItem value="glazes">
              <AccordionTrigger>Glazes</AccordionTrigger>
              <AccordionContent>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="glazeInner">Inner Glaze</label>
                    <input
                      type="text"
                      name="glazeInner"
                      id="glazeInner"
                      onChange={(e) => setGlazeInner([e.target.value])}
                      value={glazeInner}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="underglazeInner">Inner Underglaze</label>
                    <input
                      type="text"
                      name="underglazeInner"
                      id="underglazeInner"
                      onChange={(e) => setUnderglazeInner([e.target.value])}
                      value={underglazeInner}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="slipInner">Inner Slip</label>
                    <input
                      type="text"
                      name="slipInner"
                      id="slipInner"
                      onChange={(e) => setSlipInner([e.target.value])}
                      value={slipInner}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="glazeOuter">Outer Glaze</label>
                    <input
                      type="text"
                      name="glazeOuter"
                      id="glazeOuter"
                      onChange={(e) => setGlazeOuter([e.target.value])}
                      value={glazeOuter}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="underglazeOuter">Outer Underglaze</label>
                    <input
                      type="text"
                      name="underglazeOuter"
                      id="underglazeOuter"
                      onChange={(e) => setUnderglazeOuter([e.target.value])}
                      value={underglazeOuter}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="slipOuter">Outer Slip</label>
                    <input
                      type="text"
                      name="slipOuter"
                      id="slipOuter"
                      onChange={(e) => setSlipOuter([e.target.value])}
                      value={slipOuter}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex flex-col gap-2">
            <label htmlFor="notes">Notes</label>
            <textarea
              name="notes"
              id="notes"
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
              className="border border-secondary rounded-[6px] px-2 py-1"
            />
          </div> */}
          <DialogClose asChild>
            <Button
              onClick={() => {
                handleSubmit(pieceState, dispatch);
                setOpen(false);
              }}
              type="button"
              variant="secondary"
              className="m-auto bg-secondary text-background h-min w-min p-4 rounded-xl"
            >
              Save
            </Button>
          </DialogClose>
        </form>
      </div>
    </>
  );
}

export default PieceFormDialogContents;