import { useEffect, useState } from "react";

export default function ImageSlider() {
  const [images, setImages] = useState([]);
  //   const [errorMsg, setErrorMsg] = useState(null);
  //   const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const res = fetch("https://picsum.photos/v2/list?page=1&limit=5")
      .then((ress) => ress.json())
      .then((data) => setImages(data));
  }, []);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="relative flex justify-center items-center w-[600px] h-[450px]">
      <p
        onClick={handlePrevious}
        className="absolute left-4 w-8 h-8 text-white filter drop-shadow-md cursor-pointer"
      >
        left
      </p>

      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={`rounded-md shadow-lg w-full h-full object-cover transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100" : "hidden"
              }`}
            />
          ))
        : null}

      <p
        onClick={handleNext}
        className="absolute right-4 w-8 h-8 text-white filter drop-shadow-md cursor-pointer"
      >
        right
      </p>

      <div className="absolute bottom-4 flex space-x-1">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={`h-4 w-4 rounded-full outline-none cursor-pointer ${
                  currentSlide === index ? "bg-white" : "bg-gray-500"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </div>
    </div>
  );
}
