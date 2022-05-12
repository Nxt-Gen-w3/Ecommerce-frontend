import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Menu() {
  return (
    <>
      <div className="container">
        <p className="m-auto text-center bg-yellow-500 w-1/12 p-3 rounded-md -mt-3">
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
            centerSlidePercentage={13}
            centerMode
          >
            <div className="image">
              <img src="/images/menu/menu1.jpg" alt="" />
              <p>Mini Pack</p>
            </div>
            <div className="image">
              <img src="/images/menu/menu2.jpg" alt="" />
              <p>Pizza</p>
            </div>
            <div className="image">
              <img src="/images/menu/menu3.jpg" alt="" />
              <p>Chicken</p>
            </div>
            <div className="image">
              <img src="/images/menu/menu4.jpg" alt="" />
              <p>Box Meals</p>
            </div>
            <div className="image">
              <img src="/images/menu/menu5.jpg" alt="" />
              <p>Drinks</p>
            </div>
            <div className="image">
              <img src="/images/menu/menu6.jpg" alt="" />
              <p>Single Product</p>
            </div>
            <div className="image">
              <img src="/images/menu/menu7.jpg" alt="" />
              <p>Buckets</p>
            </div>
            <div className="image">
              <img src="/images/menu/menu8.jpg" alt="" />
              <p>Sauces</p>
            </div>
          </Carousel>
        </section>
      </div>
    </>
  );
}
export default Menu;
