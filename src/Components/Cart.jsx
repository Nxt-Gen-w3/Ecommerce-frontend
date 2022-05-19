import React from "react";
function Cart() {
  return (
    <>
      <div className="cart">
        <section className="container flex py-16 column justify-center">
          <section className="flex_62 border">
            <h2 className="font-extrabold text-2xl uppercase py-2 ml-4">
              shopping cart
            </h2>
            <hr />
            <div className="flex justify-between items-center py-10">
              <figure className="flex flex_23">
                <img
                  className="w-full"
                  src="/images/PopDishes/hummingbird-printed-t-shirt.jpg"
                  alt=""
                />
              </figure>

              <div className="flex justify-between flex_72">
                <div className="flex_28 leading-6">
                  <h6>Shrimp eggs</h6>
                  <p className="text-2xl text-yellow-400">$29.00</p>
                  <small className="text-xs">Dimension: 40x60cm</small>
                </div>

                <div className="flex_12  flex justify-center items-center">
                  <form action="" className="flex justify-between items-center">
                    <p>-</p>
                    <p className="border p-2 px-4 m-2">1</p>
                    <p>+</p>
                  </form>
                </div>

                <div className="flex_18 flex justify-center items-center">
                  <p>$29.00</p>
                </div>

                <div className="flex_18 flex justify-center items-center">
                  <i className="fa-solid fa-circle-trash text-xs">Delete</i>
                </div>
              </div>
            </div>
            <div className="uppercase border bg-black text-xs text-white font-extrabold w-3/12 text-center py-3 rounded-md">
              <i class="fa-solid fa-chevron-left"></i> Continue Shopping
            </div>
          </section>
          <section className="flex_32 border price">
            <div>
              <ul className="p-6">
                <li className="flex justify-between my-2">
                  <p>item</p>
                  <p>$29.00</p>
                </li>

                <li className="flex justify-between my-4">
                  <p>Shipping</p>
                  <p>$9.00</p>
                </li>
                <li className="flex justify-between mt-14">
                  <p>Total (tax excl.)</p>
                  <p>$36.00</p>
                </li>
                <li className="flex justify-between my-4">
                  <p>Total (tax incl.)</p>
                  <p>$36.00</p>
                </li>
                <li className="flex justify-between my-4">
                  <p>Taxes:</p>
                  <p>$0.00</p>
                </li>
              </ul>
              <div className="uppercase border bg-black text-white font-extrabold w-6/12 text-center py-3  m-auto ">
                Proceed to Checkout
              </div>
            </div>
            <ul className="my-6 leading-8 p-6 text-xs">
              <li>
                <i class="fa-solid fa-shield mr-3"></i> Security policy (edit
                with Customer module){" "}
              </li>
              <li>
                <i class="fa-solid fa-truck mr-3"></i> Delivery policy (edit
                with Customer module)
              </li>
              <li>
                <i class="fa-solid fa-right-left mr-3"></i> Return policy (edit
                with Customer module)
              </li>
            </ul>
          </section>
        </section>
      </div>
    </>
  );
}
export default Cart;
