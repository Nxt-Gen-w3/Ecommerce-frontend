import React from "react";
import DishCard from "./DishCard";
import PopDishes from "../JsonFiles/PopDishes.json";
import { withRouter, NavLink } from "react-router-dom";
function AllItems(props) {
  const { allProducts } = props;
  return (
    <>
      <div className="container py-20">
        <section className="m-auto flex justify-between items-center flex-wrap">
          {allProducts?.map((each, index) => (
            <>
              <article className="flex_23  mt-2 p-1.5 rounded-lg">
                <NavLink to={`/${each._id}`}>
                  <div className="flex items-center shadow-md border p-2 rounded-lg">
                    <img className="w-5/12" src={each.productImage} alt="" />

                    <div className="ml-8">
                      <h4>{each.productName}</h4>
                      <p className="text-xs font-bold mt-2">
                        {each.discription ? each.discription : "On The Way"}
                      </p>
                    </div>
                  </div>
                </NavLink>
              </article>
            </>
          ))}
        </section>
      </div>
    </>
  );
}
export default withRouter(AllItems);
