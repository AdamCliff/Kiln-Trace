import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import DatePicker from "@/components/ui/datePicker";
import { Button } from "@/components/ui/button";

import { useState } from "react";

import { usePieceContext } from "../context/piecesContext";
import { actionTypes } from "@/context/actionEnums";

// change type later
function EditPiece({ piece, _id }: { piece: any; _id: string }) {
  // state variables
  const [title, setTitle] = useState<string>(piece.title);
  const [formed, setFormed] = useState<boolean>(piece.formed);
  const [trimmed, setTrimmed] = useState<boolean>(piece.trimmed);
  const [bisqued, setBisqued] = useState<boolean>(piece.bisqued);
  const [glazed, setGlazed] = useState<boolean>(piece.glazed);
  const [fired, setFired] = useState<boolean>(piece.fired);
  const [method, setMethod] = useState<string>(piece.method);
  const [form, setForm] = useState<string>(piece.form);
  const [material, setMaterial] = useState<string>(piece.material);
  const [weight, setWeight] = useState<number>(piece.weight);
  const [height, setHeight] = useState<number>(piece.height);
  const [width, setWidth] = useState<number>(piece.width);
  const [pieceLength, setPieceLength] = useState<number>(piece.pieceLength);
  const [overglaze, setOverglaze] = useState<string[]>(piece.overglaze);
  const [underglaze, setUnderglaze] = useState<string[]>(piece.underglaze);
  const [photos, setPhotos] = useState<string>(piece.photos);
  const [artist, setArtist] = useState<string>(piece.artist);
  const [notes, setNotes] = useState<string>(piece.notes);

  const { dispatch } = usePieceContext();

  //submit handling
  const handleSubmit = async (e: any) => {
    // prevent refresh
    e.preventDefault();

    // create piece object from form fields
    const piece = {
      title,
      formed,
      trimmed,
      bisqued,
      glazed,
      fired,
      method,
      form,
      weight,
      height,
      width,
      length,
      overglaze,
      underglaze,
      photos,
      artist,
      notes,
    };

    try {
      const res = await fetch(`http://localhost:3000/pieces/${_id}`, {
        method: "PUT",
        body: JSON.stringify(piece),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      dispatch({ type: actionTypes.EDIT_PIECE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="new-piece-form" className="">
        <DialogHeader className="mb-4">
          <DialogTitle>Edit Piece</DialogTitle>
        </DialogHeader>
        <form
          action={`/pieces/${_id}`}
          method="put"
          className="flex flex-col gap-6 w-full h-[95%]"
        >
          <div className="flex gap-2">
            {/* about section */}
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-secondary rounded-[6px] px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
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
          </div>
          {/* stage section */}
          <div id="stage" className="flex items-center justify-start gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <input
                  type="checkbox"
                  name="formed"
                  id="formed-stage"
                  onChange={(e) => {
                    setFormed(e.target.checked);
                    // setDate(new Date());
                  }}
                  checked={formed}
                  className="border border-secondary rounded-[6px] px-2 py-1"
                />
                <label htmlFor="formed">Formed</label>
              </div>
              <DatePicker /* newDate={date} */ />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <input
                  type="checkbox"
                  name="trimmed"
                  id="trimmed-stage"
                  onChange={(e) => setTrimmed(e.target.checked)}
                  checked={trimmed}
                  className="border border-secondary rounded-[6px] px-2 py-1"
                />
                <label htmlFor="trimmed">Trimmed</label>
              </div>
              <DatePicker />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <input
                  type="checkbox"
                  name="bisqued"
                  id="bisqued-stage"
                  onChange={(e) => setBisqued(e.target.checked)}
                  checked={bisqued}
                  className="border border-secondary rounded-[6px] px-2 py-1"
                />
                <label htmlFor="bisqued">Bisqued</label>
              </div>
              <DatePicker />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <input
                  type="checkbox"
                  name="fired"
                  id="fired-stage"
                  onChange={(e) => setGlazed(e.target.checked)}
                  checked={glazed}
                  className="border border-secondary rounded-[6px] px-2 py-1"
                />
                <label htmlFor="fired">Fired</label>
              </div>
              <DatePicker />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <input
                  type="checkbox"
                  name="glazed"
                  id="glazed-stage"
                  onChange={(e) => setFired(e.target.checked)}
                  checked={fired}
                  className="border border-secondary rounded-[6px] px-2 py-1"
                />
                <label htmlFor="glazed">Glazed</label>
              </div>
              <DatePicker />
            </div>
          </div>
          {/* details section */}
          <Accordion
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
          </Accordion>
          {/* dimensions section */}
          <Accordion
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
          </Accordion>
          {/* glazes section */}
          <Accordion type="single" collapsible>
            <AccordionItem value="glazes">
              <AccordionTrigger>Glazes</AccordionTrigger>
              <AccordionContent>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="overglaze">Overglaze</label>
                    <input
                      type="text"
                      name="overglaze"
                      id="overglaze"
                      onChange={(e) => setOverglaze([e.target.value])}
                      value={overglaze}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="underglaze">Underglaze</label>
                    <input
                      type="text"
                      name="underglaze"
                      id="underglaze"
                      onChange={(e) => setUnderglaze([e.target.value])}
                      value={underglaze}
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
          </div>
          <DialogClose asChild>
            <Button
              onClick={handleSubmit}
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

export default EditPiece;

// DIALOG BOX NOT CLOSING ON SAVE BECAUSE OF HANDLE SUBMIT FUNCTION
// REFER TO OPEN STATE PROP FOR POSSIBLE FIX
