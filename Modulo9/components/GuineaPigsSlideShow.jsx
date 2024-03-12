import React from "react";

export default function GuineaPigsSlideShow({ src, isFavorite }) {
  return (
    <div data-testid="guineaPigsSlideShow" id="guineaPigsSlideShow">
      <h1>Cute Guinea Pigs</h1>
      <img alt="Guinea Pigs Slideshow" src={src} className={isFavorite ? "favorite" : ""} />
    </div>
  );
}
