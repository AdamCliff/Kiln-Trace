import { useState } from "react";

function NewPiece() {
  // state variables
  const [title, setTitle] = useState("");
  const [stage, setStage] = useState("");
  const [method, setMethod] = useState("");
  const [form, setForm] = useState("");
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
      const res = await fetch("http://localhost:3000/piece", {
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
      <div className="w-11/12 px-10 py-14">
        <form action="/new-piece" method="post" className="flex flex-col gap-6">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <div className="stage">
            <h3>Stage</h3>
            <label htmlFor="formed">Formed</label>
            <input
              type="radio"
              name="formed"
              id="formed-stage"
              onChange={(e) => setStage(e.target.value)}
              value={stage}
            />
            <label htmlFor="trimmed">Trimmed</label>
            <input
              type="radio"
              name="trimmed"
              id="trimmed-stage"
              onChange={(e) => setStage(e.target.value)}
              value={stage}
            />
            <label htmlFor="Bisqued">Bisqued</label>
            <input
              type="radio"
              name="Bisqued"
              id="Bisqued-stage"
              onChange={(e) => setStage(e.target.value)}
              value={stage}
            />
            <label htmlFor="Glazed">Glazed</label>
            <input
              type="radio"
              name="Glazed"
              id="Glazed-stage"
              onChange={(e) => setStage(e.target.value)}
              value={stage}
            />
            <label htmlFor="fired">Fired</label>
            <input
              type="radio"
              name="fired"
              id="fired-stage"
              onChange={(e) => setStage(e.target.value)}
              value={stage}
            />
          </div>
          <label htmlFor="method">Method</label>
          <input
            type="text"
            name="method"
            id="pinch-made"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
          />
          <label htmlFor="form">Form</label>
          <input
            type="text"
            name="form"
            id="form"
            onChange={(e) => setForm(e.target.value)}
            value={form}
          />
          <label htmlFor="weight">Weight</label>
          <input
            type="text"
            name="weight"
            id="weight"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
          />
          <div className="dimensions">
            <h3>Dimensions</h3>
            <label htmlFor="height">Height</label>
            <input
              type="text"
              name="height"
              id="height"
              onChange={(e) => setHeight(e.target.value)}
              value={height}
            />
            <label htmlFor="width">Width</label>
            <input
              type="text"
              name="width"
              id="width"
              onChange={(e) => setWidth(e.target.value)}
              value={width}
            />
            <label htmlFor="length">Length</label>
            <input
              type="text"
              name="length"
              id="length"
              onChange={(e) => setLength(e.target.value)}
              value={length}
            />
          </div>
          <label htmlFor="overglaze">Overglaze</label>
          <input
            type="text"
            name="overglaze"
            id="overglaze"
            onChange={(e) => setOverglaze(e.target.value)}
            value={overglaze}
          />
          <label htmlFor="underglaze">Underglaze</label>
          <input
            type="text"
            name="underglaze"
            id="underglaze"
            onChange={(e) => setUnderglaze(e.target.value)}
            value={underglaze}
          />
          <label htmlFor="photos">Photos</label>
          <input
            type="file"
            name="photos"
            id="photos"
            onChange={(e) => setPhotos(e.target.value)}
            value={photos}
          />
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            name="artist"
            id="artist"
            onChange={(e) => setArtist(e.target.value)}
            value={artist}
          />
          <label htmlFor="notes">Notes</label>
          <input
            type="text"
            name="notes"
            id="notes"
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default NewPiece;
