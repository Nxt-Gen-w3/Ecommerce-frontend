import React from "react";
import PopDishes from "../JsonFiles/PopDishes.json";
import { NavLink } from "react-router-dom";

function PopularDishes() {
  const items = ["pizza", "sushi", "salats", "burger", "dersest"];
  return (
    <>
      <div className="container py-20">
        <section className="w-5/12 m-auto flex justify-between items-center">
          {items.map((each) => (
            <>
              <button className="border m-3 p-4 px-6 rounded-3xl hover:bg-yellow-500 transition-all bg-gray-50 font-extrabold block">
                {each.toUpperCase()}
              </button>
            </>
          ))}
        </section>

        <section className="flex flex-wrap justify-between">
          {PopDishes.map((each, index) => (
            <>
              <article className="flex_23 border-2 p-3">
                <NavLink to={`/${index}`}>
                  <img src={each.image} alt="" />
                  <div className="flex justify-between">
                    <div>
                      <h5>{each.name}</h5>
                      <p>{each.discription}</p>
                      <h3>{each.price}</h3>
                    </div>
                    <i className="fa-solid fa-layer-minus"></i>
                  </div>
                </NavLink>
              </article>
            </>
          ))}
        </section>

        <section>
          <button className="border p-4 px-10 m-auto mt-20 rounded-lg bg-yellow-500 transition-all font-extrabold block">
            Show More
          </button>
        </section>
      </div>
    </>
  );
}
export default PopularDishes;
