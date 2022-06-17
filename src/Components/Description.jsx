import React from "react";
import { Carousel } from "react-responsive-carousel";
function Description() {
  return (
    <>
      <div className="Description flex justify-center font-bold">
        <section className="container py-10  carousel">
          <Carousel
            autoPlay
            infiniteLoop
            interval={2000}
            showArrows
            showThumbs={false}
            showStatus={false}
          >
            <article className="text-center leading-8 bg-gray-50  bg-transparent  text-black">
              <h2 className="text-5xl text-yellow-500">
                <i class="fa-solid fa-quote-left"></i>
              </h2>
              <h3 className="text-lg ">
                “Forget the trendy pizza shops, This hidden spot makes the best
                New York-style pizza slice in naples”
              </h3>
              <p>XUKA TIANA</p>
            </article>

            <article className="text-center leading-8">
              <h2 className="text-5xl text-yellow-500">
                <i class="fa-solid fa-quote-left"></i>
              </h2>
              <h3 className="text-lg">
                “Forget the trendy pizza shops, This hidden spot makes the best
                New York-style pizza slice in naples”
              </h3>
              <p>XUKA TIANA</p>
            </article>

            <article className="text-center leading-8">
              <h2 className="text-5xl text-yellow-500">
                <i class="fa-solid fa-quote-left"></i>
              </h2>
              <h3 className="text-lg">
                “Forget the trendy pizza shops, This hidden spot makes the best
                New York-style pizza slice in naples”
              </h3>
              <p>XUKA TIANA</p>
            </article>

            <article className="text-center leading-8">
              <h2 className="text-5xl text-yellow-500">
                <i class="fa-solid fa-quote-left"></i>
              </h2>
              <h3 className="text-lg">
                “Forget the trendy pizza shops, This hidden spot makes the best
                New York-style pizza slice in naples”
              </h3>
              <p>XUKA TIANA</p>
            </article>
          </Carousel>
        </section>
      </div>
    </>
  );
}
export default Description;
