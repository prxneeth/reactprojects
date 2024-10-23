import React from "react";
import useFetch from "./useFetch";

const TestFetch = () => {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log("Data:", data); // Log data to check structure

  return (
    <div className="text-center">
      <h1>useFetch Hook</h1>
      {loading ? <h3>Loading Please Wait</h3> : null}
      {data && data.products && data.products.length ? (
        data.products.map((pItems) => {
          return <p key={pItems.id}>{pItems.title}</p>;
        })
      ) : (
        <p>No products available</p>
      )}

      {error ? `Error while fetching: ${error}` : null}
    </div>
  );
};

export default TestFetch;
