import { useRef } from "react";

import { Piece } from "@/types/piece";

function NumberInputField({
  pieceField,
  pieceFieldName,
  updatePiece,
}: {
  pieceField: number;
  pieceFieldName: string;
  updatePiece: (updatedPiece: Partial<Piece>) => void;
}) {
  const numField = useRef<HTMLInputElement>(null);

  const inc = () => {
    if (numField.current) {
      numField.current.value = (parseInt(numField.current.value) || 0) + 1 + "";
      updatePiece({ [pieceFieldName]: numField.current.value });
    }
  };
  const dec = () => {
    if (numField.current) {
      numField.current.value = (parseInt(numField.current.value) || 0) - 1 + "";
      updatePiece({ [pieceFieldName]: numField.current.value });
    }
  };

  return (
    <div className="relative flex items-center gap-1 w-full max-w-32 min-w-24">
      <button
        type="button"
        id="decrement-button"
        data-input-counter-decrement="quantity-input"
        className="absolute top-[50%] left-0 -translate-y-[50%] p-2 h-full bg-accent shadow-custom rounded-l focus:outline-none"
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
      <input
        type="number"
        id="quantity-input"
        data-input-counter
        aria-describedby="helper-text-explanation"
        className="text-center text-field text-text placeholder-text !p-1 w-32"
        placeholder="100"
        max={100}
        min={0}
        ref={numField}
        value={pieceField}
        onChange={(e) => updatePiece({ [pieceFieldName]: e.target.value })}
      />
      <button
        type="button"
        id="increment-button"
        data-input-counter-increment="quantity-input"
        className="absolute top-[50%] right-0 -translate-y-[50%] p-2 h-full bg-accent shadow-custom rounded-r focus:outline-none"
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
