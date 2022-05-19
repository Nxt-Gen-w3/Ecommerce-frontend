import React from "react";
import Card from "./Card";

function Offers() {
  return (
    <>
      <div className=" mt-20 py-20 bg-gray-100 offers">
        <section className="container flex justify-center flex-wrap">
          <article className="flex_32 offer_img1 m-2 flex items-center">
            <Card
              title="Any Day Offers"
              description="NEW PHENOMENON BURGER TASTE"
              price="$12.90"
            />
          </article>
          <article className="flex_32 offer_img2 m-2 flex items-center">
            <Card
              title="Any Day Offers"
              description="NEW PHENOMENON BURGER TASTE"
              price="$12.90"
            />
          </article>
          <article className="flex_32 offer_img3 m-2 flex items-center">
            <Card
              title="Any Day Offers"
              description="NEW PHENOMENON BURGER TASTE"
              price="$12.90"
            />
          </article>
        </section>
      </div>
    </>
  );
}
export default Offers;
