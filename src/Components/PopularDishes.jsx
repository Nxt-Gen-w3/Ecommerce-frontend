import React from "react";
import PopDishes from "../JsonFiles/PopDishes.json";
import { NavLink } from "react-router-dom";

function PopularDishes() {
  const items = ["Pickles", "Dry Fruits"];
  return (
    <>
      <div className="container py-20">
        <section className="w-6/12 m-auto flex justify-center items-center flex-wrap popular_buttons">
          {items.map((each) => (
            <>
              <button className="border m-3 p-4 px-6 rounded-3xl hover:bg-yellow-500 transition-all bg-gray-50 font-extrabold block">
                {each.toUpperCase()}
              </button>
            </>
          ))}
        </section>

        <section className="flex flex-wrap justify-between popular_dishes">
          {PopDishes.map((each, index) => (
            <>
              <article className="flex_23 p-3 border mt-3 rounded-lg ">
                <NavLink to={`/${index}`}>
                  <img src={each.image} alt="" />
                  <div>
                    <div className=" flex justify-between">
                      <h5 className="m-2 text-orange-500  font-bold">
                        {each.name}
                      </h5>
                      {/* <p>{each.discription}</p> */}
                      <h3 className="m-2">{each.price}</h3>
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
            <NavLink to="/allItems">Show More</NavLink>
          </button>
        </section>
      </div>
    </>
  );
}
export default PopularDishes;
