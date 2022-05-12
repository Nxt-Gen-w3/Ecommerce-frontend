import React from "react";
function Card(props) {
  const { title, description, price } = props;
  return (
    <>
      <div className="flex_42 ml-8 leading-10">
        <h4 className="text-xl font-extrabold uppercase">{title}</h4>
        <p className="text-xs my-3">{description}</p>
        <p className="text-green-500">{price}</p>
      </div>
    </>
  );
}
export default Card;
