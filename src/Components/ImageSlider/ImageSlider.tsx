import { useState } from "react";
import "./ImageSlider.css";

type ImageSliderProps = {
  imageUrls: string[];
};

const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  };
  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    })
  };
  return (
    <>
      <div className="img-slider">
        <img className="img-slider-img" src={imageUrls[imageIndex]} alt="" />
        <button
          onClick={showPrevImage}
          className="img-slider-btn"
          style={{ left: 0 }}
        >
          &#8678;
        </button>
        <button
          onClick={showNextImage}
          className="img-slider-btn"
          style={{ right: 0}}
        >
          &#8680;
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
