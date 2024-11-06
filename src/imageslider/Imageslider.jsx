import React, { useEffect, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CircleIcon from "@mui/icons-material/Circle";

const Imageslider = () => {
  const [image, setImage] = useState([]);
  const [currentslide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const res = fetch("https://picsum.photos/v2/list?page=1&limit=5")
      .then((ress) => ress.json())
      .then((data) => setImage(data));
  }, []);

  function handleLeft() {
    setCurrentSlide(currentslide === 0 ? image.length - 1 : currentslide - 1);
  }

  function handleRight() {
    setCurrentSlide(currentslide === image.length - 1 ? 0 : currentslide + 1);
  }

  return (
    <div className="bg-blue-200 h-72">
      <h1>Imageslider</h1> <br />
      <div className="bg-blue-400 p-2 flex justify-center items-center">
        <ArrowCircleLeftIcon onClick={() => handleLeft()} />
        {image.map((i, index) => {
          return (
            <span key={i.id} className="p-1  ">
              <img
                className={`${currentslide === index ? "" : "hidden"}`}
                width={200}
                src={i.download_url}
              />
            </span>
          );
        })}
        <ArrowCircleRightIcon onClick={() => handleRight()} />
      </div>{" "}
      <span className="flex justify-center">
        {image.map((_, index) => {
          return (
            <CircleIcon
              onClick={() => setCurrentSlide(index)}
              className={`${currentslide === index ? "text-blue-500" : ""}`}
            />
          );
        })}
      </span>
    </div>
  );
};

export default Imageslider;
