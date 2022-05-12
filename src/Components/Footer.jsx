import { React, useEffect } from "react";

function Footer() {
  return (
    <>
      <div className="py-28 bg-black">
        <section className="flex items-center">
          <div className="hr"></div>
          <img className="px-6" src="/images/Logo.jpg" alt="" />
          <div className="hr"></div>
        </section>

        <section className="container text-white border-2">
          <nav className="flex justify-between">
            <ul className="flex_23 p-8  text-center leading-8">
              <li>
                <h3 className="font-extrabold text-2xl">Address</h3>
              </li>
              <li>
                570 8th Ave, <br /> New York, NY 10018 United States
              </li>
            </ul>

            <ul className="flex_23 p-8 text-center leading-8">
              <li>
                <h3 className="font-extrabold text-2xl">BOOK A TABLE</h3>
              </li>
              <li>Dogfood och Sliders foodtruck. Under Om oss kan ni läsa</li>
              <li className="text-yellow-500 text-xl font-extrabold mt-4">
                (850) 435-4155
              </li>
            </ul>

            <ul className="flex_23 p-8 text-center leading-8">
              <li>
                <h3 className="font-extrabold text-2xl">OPENING HOURS</h3>
              </li>
              <li>Monday - Friday: 8am - 4pm</li>
              <li>Saturday: 9am - 5pm</li>
            </ul>

            <ul className="flex_23 p-8 text-center leading-8">
              <li>
                <h3 className="font-extrabold text-2xl">NEWSLETTER</h3>
              </li>
              <li>
                You may unsubscribe at any moment. For that purpose, please find
                our contact info in the legal notice.
              </li>
              <li>Saturday: 9am - 5pm</li>
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
}
export default Footer;
