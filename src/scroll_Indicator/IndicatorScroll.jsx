import React, { useEffect, useState } from "react";

const IndicatorScroll = ({ urll }) => {
  const [product, setProducts] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    fetch(urll)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  function handleScrollPercentage() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  return (
    <div className="text-center">
      <div className=" fixed bg-slate-400 w-full top-0 ">
        <h1>Scroll Indicator</h1>
        <div className="w-full h-3 bg-blue-400">
          <div
            className="h-3 bg-black"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="mt-28">
        {" "}
        {product.map((p) => {
          return (
            <p className="" key={p.id}>
              {p.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default IndicatorScroll;
