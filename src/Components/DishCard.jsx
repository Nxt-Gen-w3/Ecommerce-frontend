import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
function DishCard(props) {
  const { each } = props;
  return (
    <>
      <article className="flex_47  mt-2 p-1.5 rounded-lg">
        <NavLink to={`/${each._id}`}>
          <div className="flex items-center bg-gray-50 rounded-lg">
            <p>{each.id}</p>
            <img className="w-5/12" src={each.productImage} alt="" />

            <div className="ml-8 flex-col items-center justify-between">
              <h4 className="m-1  text-orange-500 font-bold">
                {each.productName}
              </h4>
              <p className="m-1 text-xs">
                {each && each.description[0] != ""
                  ? each.description[0].slice(2, 20) + " . . ."
                  : "On The Way . . ."}{" "}
              </p>
              {/* <p className="m-1">{each.price}</p> */}
            </div>
          </div>
        </NavLink>
      </article>
    </>
  );
}
export default withRouter(DishCard);
