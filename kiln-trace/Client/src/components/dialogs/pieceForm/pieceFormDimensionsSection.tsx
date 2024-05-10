import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Piece } from "@/types/piece";
import NumberInputField from "./numberInputField";

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
        // doesn't cause error, but off to match other fields
        // defaultValue={
        //   weight || height || pieceLength || width ? "dimensions" : ""
        // }
      >
        <AccordionItem value="dimensions" className="shadow-custom border-none">
          <AccordionTrigger className="accordian-trigger">
            Dimensions, Weight
          </AccordionTrigger>
          <AccordionContent className="accordian-content">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="width"
                className="pl-1 font-medium text-md pointer-events-none"
              >
                Width
              </label>
              <input
                type="number"
                name="width"
                id="width"
                onChange={(e) => updatePiece({ width: +e.target.value })}
                value={width}
                max={100}
                className="text-field w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="length"
                className="pl-1 font-medium text-md pointer-events-none"
              >
                Length
              </label>
              <input
                type="number"
                name="length"
                id="length"
                onChange={(e) => updatePiece({ pieceLength: +e.target.value })}
                value={pieceLength}
                max={100}
                className="text-field w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="height"
                className="pl-1 font-medium text-md pointer-events-none"
              >
                Height
              </label>
              <input
                type="number"
                name="height"
                id="height"
                onChange={(e) => updatePiece({ height: +e.target.value })}
                value={height}
                max={100}
                className="text-field w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="weight"
                className="pl-1 font-medium text-md pointer-events-none"
              >
                Weight
              </label>
              <input
                type="text"
                name="weight"
                id="weight"
                onChange={(e) => updatePiece({ weight: +e.target.value })}
                value={weight}
                className="text-field w-full"
              />
            </div>
            <NumberInputField
              pieceField={weight}
              pieceFieldName="weight"
              updatePiece={updatePiece}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default PieceFormDimensionsSection;
