import React from "react";

function GifIcon(props) {
  return (
    <img
      src={props.src}
      alt={props.alt || "GIF icon"}
      style={{ width: props.size || "32px", height: props.size || "32px" }}
      onClick={props.onClick}
    />
  );
}

export default GifIcon;
