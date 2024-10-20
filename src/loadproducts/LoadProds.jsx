import React, { useEffect, useState } from "react";

const LoadProds = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        count === 0 ? 0 : count * 10
      }`
    )
      .then((res) => res.json())
      .then((data) =>
        setProducts((prevData) => [...prevData, ...data.products])
      );
  }, [count]);

  return (
    <>
      <h1 className="text-center">PRODUCTS</h1>
      <div className="flex  flex-wrap justify-center gap-4">
        <br />
        {products.map((p) => (
          <div key={p.id} className="border  shadow-2xl w-48 bg-zinc-500 p-2">
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-32 h-32 object-cover"
            />
            <p>{p.title}</p>
          </div>
        ))}
      </div>{" "}
      <div className="flex justify-center p-4">
        {" "}
        <button
          disabled={products.length === 40 ? true : false}
          onClick={() => setCount(count + 1)}
          className=""
        >
          load more
        </button>
      </div>
    </>
  );
};

export default LoadProds;
