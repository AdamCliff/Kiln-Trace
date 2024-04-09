import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Piece } from "@/types/piece";

function PieceFormDimensionsSection({
  piece,
  updatePiece,
}: {
  piece: Piece;
  updatePiece: (updatedPiece: Partial<Piece>) => void;
}) {
  const { height, width, pieceLength, weight } = piece;

  return (
    <>
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
          <AccordionContent className="flex gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="width">Width</label>
              <input
                type="text"
                name="width"
                id="width"
                onChange={(e) => updatePiece({ width: +e.target.value })}
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
                onChange={(e) => updatePiece({ pieceLength: +e.target.value })}
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
                onChange={(e) => updatePiece({ height: +e.target.value })}
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
                onChange={(e) => updatePiece({ weight: +e.target.value })}
                value={weight}
                className="border border-secondary rounded-[6px] px-2 py-1 w-full"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default PieceFormDimensionsSection;
