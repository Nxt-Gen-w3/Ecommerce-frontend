import React, { useState, useEffect } from "react";

function About() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  if (loading) {
    return (
      <div className="Loader-Sub flex justify-center items-center">
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_AQEOul.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    );
  }
  return (
    <section className="container m-5 flex flex-col items-center h-80 py-20">
      <h3 className="text-3xl font-bold text-orange-500 ">About Us</h3>
      <p className=" leading-6 text-md m-4">
        <strong className="font-bold">Achaari Couple</strong> is an initiative
        of a senior citizen couple who believes that{" "}
        <strong className="font-bold">“Age is just a number”.</strong> This
        couple has gone through a lot of hardships but have not lost hope till
        now. They believe that we can do anything, age is not the biggest factor
        rather motivation is.{" "}
        <strong className="font-bold">
          Mr. P. L. Agarwal being a foodie and Mrs. P. L. Agarwal
        </strong>{" "}
        being a good cook, their combination is just perfect. This idea came up
        the day one of their daughter’s friends was missing home-made pickles
        away from their hometown in Bangalore. The moment she tasted the pickle
        made by Mrs. P. L. Agarwal, she was very happy & remembered{" "}
        <q className="font-bold">“Maa ke haath ka swaad”.</q>{" "}
      </p>
    </section>
  );
}

export default About;
