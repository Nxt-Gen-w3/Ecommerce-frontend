import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import PopDishes from "../JsonFiles/PopDishes.json";

function Individual(props) {
  return (
    <>
      <div className="container flex justify-center py-10">
        <section className="flex_47 ">
          <img src="/images/PopDishes/brown-bear-cushion.jpg" alt="" />
        </section>
        <section className="flex_47 leading-8 p-2">
          <h2 className="text-2xl font-extrabold">Achari Couple</h2>
          <div className="flex mt-2">
            <p>Rating</p>
            <div className="ml-2">
              <i className="fa-solid fa-star text-xs text-yellow-400"></i>
              <i className="fa-solid fa-star text-xs text-yellow-400"></i>
              <i className="fa-solid fa-star text-xs text-yellow-400"></i>
              <i className="fa-solid fa-star text-xs text-yellow-400"></i>
              <i className="fa-solid fa-star text-xs "></i>
            </div>
          </div>
          <h4 className="text-xs">
            <i className="fa-solid fa-notes"></i> Read Reveiws (1)
          </h4>
          <h3 className="text-yellow-500 text-4xl font-extrabold mt-4">
            $23.90
          </h3>
          <small className="text-sm">($10.00 price per unit)</small> <br />
          <span className="text-gray-800 text-xs">
            Regular fit, round neckline, short sleeves. Made of extra long
            staple pima cotton.
          </span>
          <form action="">
            <fieldset>
              <div>
                <label htmlFor="">QUANTITY</label>
                <input
                  type="number"
                  defaultValue="0"
                  className="w-1/12 border ml-3 px-1"
                />
              </div>
              <button className="border px-8 mt-3 bg-yellow-400 text-white font-extrabold round">
                Add To Cart
              </button>
            </fieldset>
          </form>
          <ul className="flex mt-4 text-gray-700">
            <li className="text-xs">
              <i className="fa-solid fa-heart"></i> ADD TO WISHLIST
            </li>
            <li className="text-xs ml-6">
              <i className="fa-solid fa-arrows-rotate"></i> ADD TO COMPARE
            </li>
          </ul>
          <ul className="my-6">
            <li>
              <i class="fa-solid fa-shield"></i> Security policy (edit with
              Customer reassurance module){" "}
            </li>
            <li>
              <i class="fa-solid fa-truck"></i> Delivery policy (edit with
              Customer reassurance module)
            </li>
            <li>
              <i class="fa-solid fa-right-left"></i> Return policy (edit with
              Customer reassurance module)
            </li>
          </ul>
        </section>
      </div>

      <hr />

      <div className="container py-10">
        <h2 className="text-3xl font-extrabold text-center ">
          YOU MIGHT ALSO LIKE
        </h2>
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
      </div>
    </>
  );
}
export default withRouter(Individual);
