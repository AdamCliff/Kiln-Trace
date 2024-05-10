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
          <AccordionContent
            id="dimensions-accordion"
            className="accordian-content"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="width"
                className="pl-1 font-medium text-md pointer-events-none"
              >
                Width <span className="italic font-normal">{`\( cm \)`}</span>
              </label>
              <NumberInputField
                limit={254}
                inputName="width"
                pieceField={width}
                pieceFieldName="width"
                updatePiece={updatePiece}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="length"
                className="pl-1 font-medium text-md pointer-events-none"
              >
                Length <span className="italic font-normal">{`\( cm \)`}</span>
              </label>
              <NumberInputField
                limit={254}
                inputName="length"
                pieceField={pieceLength}
                pieceFieldName="pieceLength"
                updatePiece={updatePiece}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="height"
                className="pl-1 font-medium text-md pointer-events-none"
              >
                Height <span className="italic font-normal">{`\( cm \)`}</span>
              </label>
              <NumberInputField
                limit={254}
                inputName="height"
                pieceField={height}
                pieceFieldName="height"
                updatePiece={updatePiece}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="weight"
                className="pl-1 font-medium text-md pointer-events-none"
              >
                Weight <span className="italic font-normal">{`\( oz \)`}</span>
              </label>
              <NumberInputField
                limit={1000}
                inputName="weight"
                pieceField={weight}
                pieceFieldName="weight"
                updatePiece={updatePiece}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default PieceFormDimensionsSection;
