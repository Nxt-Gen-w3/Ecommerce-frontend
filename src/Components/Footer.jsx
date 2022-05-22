import { React, useEffect } from "react";

function Footer() {
  return (
    <>
      <footer className="py-28 bg-black">
        <section className="flex items-center">
          <div className="hr"></div>
          <img className="px-6" src="/images/logo-min.png" alt="" />
          <div className="hr"></div>
        </section>

        <section className="container text-white border-2">
          <nav className="flex justify-between flex-wrap">
            <ul className="flex_23 p-8  text-center leading-8">
              <li>
                <h3 className="font-extrabold text-2xl">Address</h3>
              </li>
              <li>
                Achaari Couple
              </li>
            </ul>

            <ul className="flex_23 p-8 text-center leading-8">
              <li>
                <h3 className="font-extrabold text-2xl">Order through call</h3>
              </li>
              <li>Manual order will take place</li>
              <li className="text-yellow-500 text-xl font-extrabold mt-4">
                9883097200
              </li>
            </ul>

            <ul className="flex_23 p-8 text-center leading-8">
              <li>
                <h3 className="font-extrabold text-2xl">Page Links</h3>
              </li>
              <nav>
                <ul>
                  <li>Contact Us</li>
                  <li>FAQ's</li>
                  <li>Shipping & Delivery Policy</li>
                  <li>Refund & Cancellation Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </nav>
            </ul>

            <ul className="flex_23 p-8 text-center leading-8">
              <li>
                <h3 className="font-extrabold text-2xl">Online Orders</h3>
              </li>
              <li>
                We will soon start our online order service
              </li>
              <li>For manual order please call us on our contact number</li>
            </ul>
          </nav>
        </section>
      </footer>
    </>
  );
}
export default Footer;
