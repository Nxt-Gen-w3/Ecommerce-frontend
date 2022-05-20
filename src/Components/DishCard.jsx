import React from "react";
function DishCard(props) {
  const { each } = props;
  return (
    <>
      <article className="flex_47  mt-2 p-1.5 rounded-lg">
        <div className="flex items-center bg-gray-50 rounded-lg">
          <img className="w-5/12" src={each.image} alt="" />

          <div className="ml-8 flex-col items-center justify-between">
            <h4 className="m-1  text-orange-500 font-bold">{each.name}</h4>
            <p className="m-1 font-semibold">{each.discription}</p>
            <p className="m-1">{each.price}</p>
          </div>
        </div>
      </article>
    </>
  );
}
export default DishCard;
