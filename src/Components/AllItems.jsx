import React from "react";
import DishCard from "./DishCard";
import PopDishes from "../JsonFiles/PopDishes.json";
function AllItems() {
  return (
    <>
      <div className="container py-20">
        <section className="m-auto flex justify-between items-center flex-wrap">
          {PopDishes.map((each, index) => (
            <>
              <article className="flex_23  mt-2 p-1.5 rounded-lg">
                <div className="flex items-center shadow-md border p-2 rounded-lg">
                  <img className="w-5/12" src={each.image} alt="" />

                  <div className="ml-8">
                    <h4>{each.name}</h4>
                    <p>{each.discription}</p>
                    <p>{each.price}</p>
                  </div>
                </div>
              </article>
            </>
          ))}
        </section>
      </div>
    </>
  );
}
export default AllItems;
