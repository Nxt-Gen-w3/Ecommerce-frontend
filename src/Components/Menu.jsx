import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Menu() {
  return (
    <>
      <div className="container">
        <p className="m-auto text-center bg-yellow-500 w-1/12 p-3 rounded-md -mt-3 menu">
          Menu
        </p>
        <section className="carousel h-2/4 mt-6">
          <Carousel
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showArrows
            interval={1500}
            centerSlidePercentage={10}
            centerMode
          >
            <div className="image">
              <img src="/images/menu/ac-pk-4.png" alt="" />
              <p>Mini Pack</p>
            </div>
            <div className="image">
              <img src="/images/menu/ac-pk-4.png" alt="" />
              <p>Pizza</p>
            </div>
            <div className="image">
              <img src="/images/menu/ac-pk-1.png" alt="" />
              <p>Chicken</p>
            </div>
            <div className="image">
              <img src="/images/menu/ac-pk-2.png" alt="" />
              <p>Box Meals</p>
            </div>
            <div className="image">
              <img src="/images/menu/ac-pk-3.png" alt="" />
              <p>Drinks</p>
            </div>
            <div className="image">
              <img src="/images/menu/ac-pk-4.png" alt="" />
              <p>Single Product</p>
            </div>
            <div className="image">
              <img src="/images/menu/ac-pk-2.png" alt="" />
              <p>Buckets</p>
            </div>
            <div className="image">
              <img src="/images/menu/ac-pk-4.png" alt="" />
              <p>Sauces</p>
            </div>
          </Carousel>
        </section>
      </div>
    </>
  );
}
export default Menu;
