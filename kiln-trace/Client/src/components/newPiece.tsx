import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import DatePicker from "@/components/ui/datePicker";

import { Link } from "react-router-dom";
import { useState } from "react";

function NewPiece() {
  // state variables
  const [title, setTitle] = useState("");
  const [stage, setStage] = useState("");
  // const [date, setDate] = useState<Date>();
  const [method, setMethod] = useState("");
  const [form, setForm] = useState("");
  const [material, setMaterial] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [overglaze, setOverglaze] = useState("");
  const [underglaze, setUnderglaze] = useState("");
  const [photos, setPhotos] = useState("");
  const [artist, setArtist] = useState("");
  const [notes, setNotes] = useState("");

  //submit handling
  const handleSubmit = async (e: any) => {
    // prevent refresh
    e.preventDefault();

    // create piece object from form fields
    const piece = {
      title,
      stage,
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
      // try post new piece
      const res = await fetch("http://localhost:3000/new-piece", {
        method: "POST",
        body: JSON.stringify(piece),
        headers: { "Content-Type": "application/json" },
      });

      //   await response
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="new-piece-form" className="space-y-4">
        <DialogHeader>
          <DialogTitle>New Piece</DialogTitle>
        </DialogHeader>
        <form
          action="/new-piece"
          method="post"
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
                  type="radio"
                  name="formed"
                  id="formed-stage"
                  onChange={(e) => {
                    setStage(e.target.value);
                    // setDate(new Date());
                  }}
                  value={stage}
                  className="border border-secondary rounded-[6px] px-2 py-1"
                />
                <label htmlFor="formed">Formed</label>
              </div>
              <DatePicker /* newDate={date} */ />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <input
                  type="radio"
                  name="trimmed"
                  id="trimmed-stage"
                  onChange={(e) => setStage(e.target.value)}
                  value={stage}
                  className="border border-secondary rounded-[6px] px-2 py-1"
                />
                <label htmlFor="trimmed">Trimmed</label>
              </div>
              <DatePicker />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <input
                  type="radio"
                  name="bisqued"
                  id="bisqued-stage"
                  onChange={(e) => setStage(e.target.value)}
                  value={stage}
                  className="border border-secondary rounded-[6px] px-2 py-1"
                />
                <label htmlFor="bisqued">Bisqued</label>
              </div>
              <DatePicker />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <input
                  type="radio"
                  name="glazed"
                  id="glazed-stage"
                  onChange={(e) => setStage(e.target.value)}
                  value={stage}
                  className="border border-secondary rounded-[6px] px-2 py-1"
                />
                <label htmlFor="glazed">Glazed</label>
              </div>
              <DatePicker />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <input
                  type="radio"
                  name="fired"
                  id="fired-stage"
                  onChange={(e) => setStage(e.target.value)}
                  value={stage}
                  className="border border-secondary rounded-[6px] px-2 py-1"
                />
                <label htmlFor="fired">Fired</label>
              </div>
              <DatePicker />
            </div>
          </div>
          {/* details section */}
          <Accordion type="single" collapsible>
            <AccordionItem value="about">
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
          <Accordion type="single" collapsible>
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
                      onChange={(e) => setWidth(e.target.value)}
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
                      onChange={(e) => setLength(e.target.value)}
                      value={length}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="height">Height</label>
                    <input
                      type="text"
                      name="height"
                      id="height"
                      onChange={(e) => setHeight(e.target.value)}
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
                      onChange={(e) => setWeight(e.target.value)}
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
                      onChange={(e) => setOverglaze(e.target.value)}
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
                      onChange={(e) => setUnderglaze(e.target.value)}
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
          <button
            type="submit"
            onClick={handleSubmit}
            className="self-center bg-secondary text-background h-min w-min p-4 rounded-xl"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default NewPiece;
