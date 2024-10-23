import React, { useRef } from "react";
import useFetch from "../customFetch/useFetch";

const TopBottomScroll = () => {
  const bottomRef = useRef();

  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <div>
        TOP SECTION
        <button onClick={handleScrollBottom}>scroll to the bottom</button>
      </div>

      {data && data.products && data.products.length ? (
        data.products.map((pItems) => {
          return <p key={pItems.id}>{pItems.title}</p>;
        })
      ) : (
        <p>No products available</p>
      )}

      <div ref={bottomRef}>
        BOTTOM SECTION
        <button onClick={handleScrollTop}>scroll to the top</button>
      </div>
    </div>
  );
};

export default TopBottomScroll;
