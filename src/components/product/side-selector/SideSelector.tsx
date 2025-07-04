import React from "react";
import type { Sizes } from "@/interfaces";
import clsx from "clsx";

interface Props {
  selectedSize: Sizes;
  avialablesSizes: Sizes[];
}

function SideSelector({ selectedSize, avialablesSizes }: Props) {
  return (
    <div>
      <h3 className="font-bold">Size:</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        {avialablesSizes.map((size) => (
          <button
            className={clsx("hover:font-bold", {underline: size === selectedSize})}
            key={size}
            style={{
              padding: "8px 12px",
              border: "1px solid #ccc",
              backgroundColor: selectedSize === size ? "#ddd" : "#fff",
              cursor: "pointer",
            }}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideSelector;
