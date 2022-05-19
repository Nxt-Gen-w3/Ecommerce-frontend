import React from "react";
function Hero() {
  return (
    <>
      <div className="hero_bg">
        <section className="container flex items-center h-5/6">
          <div className="flex_42 leading-10 ml-20 mt-28">
            <h1 className="text-7xl font-extrabold text-white hero_heading">
              UNLIMITED MEDIUM <span className="text-yellow-500 ">PIZZAS</span>
            </h1>
            <h3 className="text-2xl text-green-400 mt-10">
              Medium 2-topping* Pizza
            </h3>
            <p className="text-white text-md mt-6">
              *Additional charge for premium toppings. Minimum of 2 required.
            </p>
            <div className="flex items-center mt-8 hero_price">
              <div className="border py-1 px-3 bg-yellow-400 rounded-md font-extrabold uppercase order_now">
                order now
              </div>
              <div className="flex ml-5">
                <p className="text-green-500 text-6xl">$12.99</p>
                <span className="text-2xl inline-block ml-4 text-gray-500">
                  $19.99
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Hero;
