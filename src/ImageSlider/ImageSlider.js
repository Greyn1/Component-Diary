import svg1 from "./undraw_by_my_car.svg";
import svg2 from "./undraw_traveling.svg";
import svg3 from "./undraw_new_year_2023.svg";
import svg4 from "./undraw_pancakes.svg";
import svg5 from "./undraw_engineering_team.svg";
import { useState, useEffect } from "react";
import "./ImageSlider.css";

const svgObjArray = [
  { id: 1, src: svg1 },
  { id: 2, src: svg2 },
  { id: 3, src: svg3 },
  { id: 4, src: svg4 },
  { id: 5, src: svg5 },
];

const ImageSlider = () => {
  const [counter, setCounter] = useState(0);
  const [curImgSrc, setCurImgSrc] = useState(svgObjArray[0]);

  const handleClickNext = () => {
    if (counter === svgObjArray.length - 1) setCounter(0);
    else setCounter((prevCounter) => prevCounter + 1);
  };

  const handleClickPrev = () => {
    if (counter === 0) setCounter(svgObjArray.length - 1);
    else setCounter((prevCounter) => prevCounter - 1);
  };

  useEffect(() => {
    setCurImgSrc(svgObjArray[counter]);
  }, [counter]);

  return (
    <div className="imageSlider_container">
      <button type="button" onClick={handleClickPrev}>
        prev
      </button>
      <div className="img-container">
        <img src={curImgSrc.src} alt={curImgSrc.id} className="image" />
      </div>
      <button type="button" onClick={handleClickNext}>
        next
      </button>
    </div>
  );
};

export default ImageSlider;
