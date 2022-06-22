import { React, useState, useEffect } from "react";
import PopDishes from "../JsonFiles/PopDishes.json";
import { NavLink } from "react-router-dom";

function PopularDishes() {
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    handleFetch();
  }, []);

  let handleFetch = () => {
    fetch(`https://achaari-couple-k28px.ondigitalocean.app/api/v1/products`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      });
  };
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
          {productData?.products
            ?.map((each, index) => (
              <>
                <article className="flex_23 hover:animate-pulse  p-3 border mt-3 rounded-lg ">
                  <NavLink to={`/${each._id}`}>
                    <div className="relative ">
                      <div className="  h-44 w-74 bg-orange-100 hover:bg-orange-500 rounded-2xl ">
                        <div className="absolute flex justify-center items-center w-36 h-36  left-16 p-2  ">
                          <img
                            src={each.productImage}
                            alt=""
                            className="w-full h-full "
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className=" ">
                        <h5 className="m-2 text-orange-500 text-center font-bold mt-2">
                          {each.productName}
                        </h5>

                        {/* <h3 className="m-2">{each.price}</h3> */}
                      </div>
                      <i className="fa-solid fa-layer-minus"></i>
                    </div>
                  </NavLink>
                </article>
              </>
            ))
            .slice(0, 12)}
        </section>

        <section>
          <NavLink to="/allItems">
            <button className="border  animate-bounce p-4 px-10 m-auto mt-20 rounded-lg bg-yellow-500 transition-all font-extrabold block">
              Show More
            </button>
          </NavLink>
        </section>
      </div>
    </>
  );
}
export default PopularDishes;
