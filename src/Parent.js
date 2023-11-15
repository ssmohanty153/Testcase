import React, { useState } from "react";
import Children from "./Children";
import ProductList from "./ProductList";

function Parent() {
  const [data, setdata] = useState("ssss");

  const handleChange = (e) => {
    // console.log(e.target.value);
    setdata(e.target.value);
  };
  return (
    <div>
      <h1>parent</h1>
      {data}
      <Children handleChange={handleChange} data={data} />
      <button>login</button>
      <ProductList />
    </div>
  );
}

export default Parent;
