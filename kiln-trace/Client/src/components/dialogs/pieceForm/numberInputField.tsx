import { useEffect, useRef, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Piece } from "@/types/piece";

function NumberInputField({
  inputName,
  limit,
  pieceField,
  pieceFieldName,
  updatePiece,
}: {
  inputName: string;
  limit: number;
  pieceField: number;
  pieceFieldName: string;
  updatePiece: (updatedPiece: Partial<Piece>) => void;
}) {
  const numField = useRef<HTMLInputElement>(null);
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);
  const boundary = document.getElementById("dimensions-accordion");

  // handle tooltip open on numeric boundary in input field
  useEffect(() => {
    if (tooltipOpen) {
      const timeoutId = setTimeout(() => {
        setTooltipOpen(false);
      }, 2500);

      return () => clearTimeout(timeoutId);
    }
  }, [tooltipOpen]);

  // handle text entry in input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (e.target.value === "") {
      updatePiece({ [pieceFieldName]: 0 }); // Set to null or some default value
    } else if (!isNaN(newValue) && newValue >= 0 && newValue <= limit) {
      updatePiece({ [pieceFieldName]: newValue });
    } else if (!isNaN(newValue) && newValue < 0 && newValue > limit) {
      setTooltipOpen(true);
    }
  };

  // handle increment button logic
  const inc = () => {
    if (numField.current?.value === "") numField.current.value = 0 + "";
    if (numField.current && parseInt(numField.current.value) < limit) {
      const currentValue = parseInt(numField.current.value) || 0;
      const newValue = currentValue + 1;
      numField.current.value = newValue.toString();
      updatePiece({ [pieceFieldName]: newValue });
    } else {
      setTooltipOpen(true);
    }
  };

  // handle decrement button logic
  const dec = () => {
    if (numField.current && parseInt(numField.current.value) > 0) {
      const currentValue = parseInt(numField.current.value) || 0;
      const newValue = currentValue - 1;
      numField.current.value = newValue.toString();
      updatePiece({ [pieceFieldName]: newValue });
    } else {
      setTooltipOpen(true);
    }
  };

  return (
    <div className="relative flex items-center gap-1 w-full max-w-32 min-w-24">
      <button
        type="button"
        id="decrement-button"
        data-input-counter-decrement="quantity-input"
        className="absolute top-[50%] left-0 -translate-y-[50%] p-2 h-full bg-accent bg-opacity-15 shadow-custom rounded-l focus:outline-none"
        onClick={dec}
      >
        <svg
          className="w-3 h-3 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h16"
          />
        </svg>
      </button>
      <TooltipProvider>
        <Tooltip open={tooltipOpen}>
          <TooltipTrigger className="absolute top-0 left-0 h-full w-full pointer-events-none"></TooltipTrigger>
          <input
            type="number"
            name={inputName}
            data-input-counter
            aria-describedby="Number input"
            className="text-center text-field text-text font-medium placeholder:text-sm placeholder:font-normal placeholder-text placeholder-opacity-75 !p-1 w-32"
            placeholder={`0 - ${limit}`}
            max={limit}
            min={0}
            ref={numField}
            value={pieceField === 0 ? "" : pieceField}
            onChange={handleChange}
            onBlur={() => {
              if (pieceField < 0) {
                updatePiece({ [pieceFieldName]: 0 });
              } else if (pieceField > limit) {
                updatePiece({ [pieceFieldName]: limit });
              }
            }}
          />
          <TooltipContent
            className="bg-background border border-primary rounded p-1 shadow-custom"
            sideOffset={12}
            avoidCollisions
            collisionBoundary={boundary}
            collisionPadding={12}
          >{`Enter a value between 0 - ${limit}`}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <button
        type="button"
        id="increment-button"
        data-input-counter-increment="quantity-input"
        className="absolute top-[50%] right-0 -translate-y-[50%] p-2 h-full bg-accent bg-opacity-15 shadow-custom rounded-r focus:outline-none"
        onClick={inc}
      >
        <svg
          className="w-3 h-3 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
  );
}

export default NumberInputField;
