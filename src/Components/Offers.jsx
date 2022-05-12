import React from "react";
import Card from "./Card";

function Offers() {
  return (
    <>
      <div className=" mt-20 py-20 bg-gray-100">
        <section className="container flex justify-between">
          <article className="flex_32 offer_img1 flex items-center">
            <Card
              title="Any Day Offers"
              description="NEW PHENOMENON BURGER TASTE"
              price="$12.90"
            />
          </article>
          <article className="flex_32 offer_img2 flex items-center">
            <Card
              title="Any Day Offers"
              description="NEW PHENOMENON BURGER TASTE"
              price="$12.90"
            />
          </article>
          <article className="flex_32 offer_img3 flex items-center">
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
