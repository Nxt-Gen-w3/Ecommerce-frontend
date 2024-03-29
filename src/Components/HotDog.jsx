import React from "react";
function HotDog() {
  return (
    <>
      <div>
        <section className="hotdog_banner my-10 relative">
          <div className=" flex container justify-end h-5/6 items-center">
            <div className="flex_32 mt-20 content">
              {/* <h3 className="text-5xl text-white mt-5 font-thin">Hot Fresh</h3>
              <h2 className="mt-3 uppercase text-8xl font-sans font-extrabold text-yellow-500">
                hotdog
              </h2> */}
              <button className="p-4 absolute  top-80 px-10 mt-8 rounded-lg text-white bg-orange-500 transition-all font-extrabold block">
                Order Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default HotDog;
