import { React, useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import PopDishes from "../JsonFiles/PopDishes.json";

function Individual(props) {
  const [data, setData] = useState("Description");
  const handleData = (e) => {
    setData(e);
  };

  return (
    <>
      <div className=" bg-gray-100 py-10 individual">
        <div className="container flex items-center py-4 overflow-y-auto whitespace-nowrap">
          <a href="#" className="text-gray-600 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>

          <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

          <a
            href="#"
            className="text-gray-600 dark:text-gray-200 hover:underline"
          >
            Account
          </a>

          <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

          <a
            href="#"
            className="text-gray-600 dark:text-gray-200 hover:underline"
          >
            Profile
          </a>

          <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Settings
          </a>
        </div>
      </div>
      <div className="container flex justify-center py-10 column individual">
        <section className="flex_47">
          <img
            className="Item_image"
            src="images/PopDishes/brown-bear-cushion (1).jpg"
            alt=""
          />
        </section>
        <section className="flex_47 leading-8 p-2">
          <>
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
              <li className="text-sm">
                <i class="fa-solid fa-shield"></i> Security policy (edit with
                Customer reassurance module){" "}
              </li>
              <li className="text-sm mt-2">
                <i class="fa-solid fa-truck"></i> Delivery policy (edit with
                Customer reassurance module)
              </li>
              <li className="text-sm mt-2">
                <i class="fa-solid fa-right-left"></i> Return policy (edit with
                Customer reassurance module)
              </li>
            </ul>
          </>
        </section>
      </div>

      <div className="container py-10 individual_toggle">
        <div className="flex justify-center">
          <div className="flex_28 flex justify-between">
            <h3
              onClick={() => handleData("Description")}
              className={
                data == "Description"
                  ? "desc px-3 py-2 cursor-pointer"
                  : "px-3 py-2 cursor-pointer"
              }
            >
              Description
            </h3>
            <h3
              onClick={() => handleData("Product Details")}
              className={
                data == "Product Details"
                  ? "desc px-3 py-2 cursor-pointer"
                  : "px-3 py-2 cursor-pointer"
              }
            >
              Product Details
            </h3>
            <h3
              onClick={() => handleData("Reviews")}
              className={
                data == "Reviews"
                  ? "desc px-3 py-2 cursor-pointer"
                  : "px-3 py-2 cursor-pointer"
              }
            >
              Reviews
            </h3>
          </div>
        </div>
        <hr />

        <div className="h-48">
          {data === "Description" ? (
            <p className="p-12 text-xs text-center leading-6">
              Symbol of lightness and delicacy, the hummingbird evokes curiosity
              and joy. Studio Design' PolyFaune collection features classic
              products with colorful patterns, inspired by the traditional
              japanese origamis. To wear with a chino or jeans. The sublimation
              textile printing process provides an exceptional color rendering
              and a color, guaranteed overtime.
            </p>
          ) : (
            ""
          )}

          {data === "Product Details" ? (
            <>
              <h3 className="border p-2 inline-block mt-4 font-sans">
                Fishing
              </h3>
              <p className="text-xs mt-2">Reference demo_1</p>
              <div>
                <h4 className="font-extrabold mt-5">Data Sheet</h4>
                <div className="flex justify-between flex-wrap mt-1">
                  <p className="flex_47 border p-3 rounded-md bg-gray-100 my-2">
                    Composition
                  </p>
                  <p className="flex_47 border p-3 rounded-md bg-gray-100 my-2">
                    Property
                  </p>
                  <p className="flex_47 border p-3 rounded-md bg-gray-100 my-2">
                    Ceramic Cotton
                  </p>
                  <p className="flex_47 border p-3 rounded-md bg-gray-100 my-2">
                    Short Sleeves
                  </p>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          {data == "Reviews" ? (
            <>
              <div className="py-8">
                <h5 className="text-sm font-extrabold">Grade</h5>
                <div className="my-2">
                  <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                  <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                  <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                  <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                  <i className="fa-solid fa-star text-xs text-gray-200"></i>
                </div>
                <h4 className="text-xs font-extrabold">thao pham 09/10/2020</h4>
              </div>
              <hr className="my-5 opacity-50" />
            </>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="container py-10">
        <h2 className="text-3xl font-extrabold text-center ">
          YOU MIGHT ALSO LIKE
        </h2>
        <section className="flex flex-wrap justify-between popular_dishes">
          {PopDishes.map((each, index) => (
            <>
              <article className="flex_23 p-3 border mt-4 rounded-xl leading-6">
                <NavLink to={`/${index}`}>
                  <img src={each.image} alt="" />
                  <div className="flex justify-between ">
                    <div>
                      <h5 className="mt-2">{each.name}</h5>
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
