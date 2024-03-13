import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DatePicker from "@/components/ui/datePicker";
import usePieceForm from "@/hooks/usePieceForm";

function PieceModalContents() {
  const { values, actions } = usePieceForm();

  return (
    <>
      <div className="flex gap-2">
        {/* about section */}
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => actions.setTitle(e.target.value)}
            value={values.title}
            className="border border-secondary rounded-[6px] px-2 py-1"
          />
          <p>{values.title}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            name="artist"
            id="artist"
            onChange={(e) => actions.setArtist(e.target.value)}
            value={values.artist}
            className="border border-secondary rounded-[6px] px-2 py-1"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="photos">Photos</label>
          <input
            type="text"
            name="photos"
            id="photos"
            onChange={(e) => actions.setPhotos(e.target.value)}
            value={values.photos}
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
                actions.setFormed(e.target.checked);
                // setDate(new Date());
              }}
              checked={values.formed}
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
              onChange={(e) => actions.setTrimmed(e.target.checked)}
              checked={values.trimmed}
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
              onChange={(e) => actions.setBisqued(e.target.checked)}
              checked={values.bisqued}
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
              onChange={(e) => actions.setGlazed(e.target.checked)}
              checked={values.glazed}
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
              onChange={(e) => actions.setFired(e.target.checked)}
              checked={values.fired}
              className="border border-secondary rounded-[6px] px-2 py-1"
            />
            <label htmlFor="glazed">Glazed</label>
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
                  onChange={(e) => actions.setForm(e.target.value)}
                  value={values.form}
                  className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="method">Method</label>
                <input
                  type="text"
                  name="method"
                  id="pinch-made"
                  onChange={(e) => actions.setMethod(e.target.value)}
                  value={values.method}
                  className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="material">Material</label>
                <input
                  type="text"
                  name="material"
                  id="material"
                  onChange={(e) => actions.setMaterial(e.target.value)}
                  value={values.material}
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
                  onChange={(e) => actions.setWidth(+e.target.value)}
                  value={values.width}
                  className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="length">Length</label>
                <input
                  type="text"
                  name="length"
                  id="length"
                  onChange={(e) => actions.setPieceLength(+e.target.value)}
                  value={values.pieceLength}
                  className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="height">Height</label>
                <input
                  type="text"
                  name="height"
                  id="height"
                  onChange={(e) => actions.setHeight(+e.target.value)}
                  value={values.height}
                  className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="weight">Weight</label>
                <input
                  type="text"
                  name="weight"
                  id="weight"
                  onChange={(e) => actions.setWeight(+e.target.value)}
                  value={values.weight}
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
                  onChange={(e) => actions.setOverglaze([e.target.value])}
                  value={values.overglaze}
                  className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="underglaze">Underglaze</label>
                <input
                  type="text"
                  name="underglaze"
                  id="underglaze"
                  onChange={(e) => actions.setUnderglaze([e.target.value])}
                  value={values.underglaze}
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
          onChange={(e) => actions.setNotes(e.target.value)}
          value={values.notes}
          className="border border-secondary rounded-[6px] px-2 py-1"
        />
      </div>
    </>
  );
}

export default PieceModalContents;
