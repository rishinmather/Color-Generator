import React from "react";
import { toast } from "react-toastify";
const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(`Color copied to clipboard`);
      } catch (error) {
        toast.error(`failed to copy to clipboard`);
      }
    } else {
      toast.error(`clipboard access not available `);
    }
  };

  return (
    <article
      onClick={saveToClipBoard}
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
