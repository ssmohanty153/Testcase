import React from "react";

function Children({ handleChange, data }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={data}
        placeholder="name"
      />
    </div>
  );
}

export default Children;
