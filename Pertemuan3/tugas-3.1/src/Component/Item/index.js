import React from "react";
import "../style.css";

function Item(props) {
  const { data } = props;
  return (
    <div className="card mx-auto mt-2">
      <img src={data.image} alt={data.name} />
      <h3 className="fw-bolder mb-0 fs-6">{data.name}</h3>
      <p className="text-danger">{data.price}</p>
    </div>
  );
}

export default Item;
