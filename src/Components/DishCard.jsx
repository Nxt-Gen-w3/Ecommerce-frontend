import React from "react";
function DishCard(props) {
  const { each } = props;
  return (
    <>
      <article className="flex_47  mt-2 p-1.5 rounded-lg">
        <div className="flex items-center bg-gray-50 rounded-lg">
          <img className="w-5/12" src={each.image} alt="" />

          <div className="ml-8">
            <h4>{each.name}</h4>
            <p>{each.discription}</p>
            <p>{each.price}</p>
          </div>
        </div>
      </article>
    </>
  );
}
export default DishCard;
