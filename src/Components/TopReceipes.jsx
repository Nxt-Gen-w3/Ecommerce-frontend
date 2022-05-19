import React from "react";
import topReceipes from "../JsonFiles/PopDishes.json";
import DishCard from "./DishCard";
function TopReceipes() {
  return (
    <>
      <div className="container flex justify-between py-10 column">
        <section className="flex_66">
          <div className="flex justify-between items-center border ">
            <h2 className="text-4xl font-extrabold">Top Receipes</h2>
            <p>
              Show More{" "}
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between mt-6 border-4">
            {topReceipes
              .map((each) => (
                <>
                  <DishCard each={each} />
                </>
              ))
              .slice(0, 6)}
          </div>
        </section>
        <section className="flex_32 super_delicious"></section>
      </div>
    </>
  );
}
export default TopReceipes;
