import { React, useState, useEffect } from "react";
function FAQ() {
  let [state, setState] = useState(null);

  let handleClick = (each, index) => {
    setState((state = state == index ? null : index));
  };
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

  let questions = [
    {
      Q: "Why Achaari Couple?",
      A: "We provide home-made pickles which is free of preservatives.",
    },
    {
      Q: "Do we have any return or refund policy?",
      A: "No, we don’t have any return or refund policy as of now.",
    },
    {
      Q: "What is the delivery time?",
      A: "We try our best to deliver the products within 5–7 days of your order. SMS and Email is sent on the date of fulfillment, ready to dispatch, shipping and delivery - the exact time of delivery cannot be predicted but usually get delivered within a week or two.However, in certain situations we will not be able to deliver within 5-7 days. Any extra ordinary delay would be intimated to you separately via an Email and SMS. Achaari Couple reserves the right to cancel any order, if the delivery location is blacklisted in our delivery system – amount paid by the customer will be duly refunded.",
    },
    {
      Q: "What all cities do we deliver in?",
      A: "We deliver our products throughout India.",
    },
    {
      Q: "What products are we currently dealing in?",
      A: "We are currently dealing in home-made pickles, dry fruits & mouth fresheners. We intend to soon launch more products.",
    },
  ];
  return (
    <>
      <div className="FAQ m-8">
        <section className="container flex justify-center items-center h-full">
          <div className="w-8/12 border-2 m-auto transition-all ">
            <h2 className="text-2xl font-extrabold">
              Frequently Ask Questions
            </h2>
            {questions.map((each, index) => (
              <>
                <div
                  className="mt-5 border p-2 py-4 flex justify-between"
                  onClick={() => handleClick(each, index)}
                >
                  <h2>Q. {each.Q}</h2>
                  <p>{state === index ? <span>👆</span> : <span>👇</span>}</p>
                </div>
                {index == state ? (
                  <p className="mt-4 leading-5 border p-2 py-4 bg-slate-200 transition-all">
                    A. {each.A}
                  </p>
                ) : (
                  ""
                )}
              </>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
export default FAQ;
