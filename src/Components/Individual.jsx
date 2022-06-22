import { React, useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import PopDishes from "../JsonFiles/PopDishes.json";

function Individual(props) {
  const { allProducts, userLogged } = props;
  const [data, setData] = useState("Description");
  const [individualData, setIndividualData] = useState(null);
  const [qunty, setQunty] = useState("");
  const [reviews, setReviews] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [subLoading, setSubLoading] = useState(true);
  const [reviewPost, setReviewPost] = useState({
    review: "",
    rating: 0,
    author: "",
  });

  const handleData = (e) => {
    setData(e);
  };
  useEffect(() => {
    handleIndividule(individualData);
    getReviews();
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
  }, [individualData]);
  const getReviews = () => {
    const id = props.match.params.id;
    fetch(
      `https://achaari-couple-k28px.ondigitalocean.app/api/v1/products/${id}/reviews`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  };

  const handleChange = (e) => {
    setQunty(e.target.value);
  };

  const handleIndividule = () => {
    const id = props.match.params.id;
    fetch(
      `https://achaari-couple-k28px.ondigitalocean.app/api/v1/products/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIndividualData(data);
        setTimeout(() => {
          setSubLoading(false);
        }, 3000);
      });
  };
  const handleReviewChange = ({ target }) => {
    const { name, value } = target;
    setReviewPost({ [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleReviewPosts();
    getReviews();
    setReviewPost({ review: "", rating: 0, author: "" });
  };

  const handleReviewPosts = () => {
    let id = props.match.params.id;
    let storageKey = localStorage.getItem("userToken");
    if (storageKey) {
      fetch(
        `https://achaari-couple-k28px.ondigitalocean.app/api/v1/products/${id}/reviews`,
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            authorization: `${storageKey}`,
          },
          body: JSON.stringify({
            review: {
              body: reviewPost.review,
              rating: reviewPost.rating,
              author: reviewPost.author,
            },
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          getReviews();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  // if (loading) {
  //   return (
  //     <div className="Loader-Sub flex justify-center items-center">
  //       <lottie-player
  //         src="https://assets3.lottiefiles.com/packages/lf20_AQEOul.json"
  //         background="transparent"
  //         speed="1"
  //         style={{ width: "300px", height: "300px" }}
  //         loop
  //         autoplay
  //       ></lottie-player>
  //     </div>
  //   );
  // }

  return (
    <>
      <div className=" bg-gray-100 py-10 individual">
        <div className="container flex items-center py-4 overflow-y-auto whitespace-nowrap">
          <a href="#" className="text-gray-600 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>

          <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

          <a
            href="#"
            className="text-gray-600 dark:text-gray-200 hover:underline"
          >
            Account
          </a>

          <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

          <a
            href="#"
            className="text-gray-600 dark:text-gray-200 hover:underline"
          >
            Profile
          </a>

          <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Settings
          </a>
        </div>
      </div>

      <div className="container flex justify-center py-10 column individual">
        <section className="flex_47">
          {subLoading ? (
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
          ) : (
            <img
              className="Item_image w-full"
              src={individualData?.product?.productImageX}
              alt=""
            />
          )}
        </section>
        <section className="flex_47 leading-8 p-2">
          <>
            <h2 className="text-2xl font-extrabold">
              {individualData?.product?.productName}
            </h2>
            <div className="flex mt-2">
              <p>Rating</p>
              <div className="ml-2">
                <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                <i className="fa-solid fa-star text-xs "></i>
              </div>
            </div>
            <h4 className="text-xs">
              <i className="fa-solid fa-notes"></i> Read Reveiws (1)
            </h4>
            <h3 className="text-yellow-500 text-4xl font-extrabold mt-4">
              {qunty ==
              individualData?.product?.quantity[0].split(",").slice(0, 1)
                ? individualData?.product?.price[0]
                    .split(",")
                    .slice(0, 1)
                    .join("") + " Rs"
                : qunty ==
                  individualData?.product?.quantity[0].split(",").slice(1, 2)
                ? individualData?.product?.price[0]
                    .split(",")
                    .slice(1, 2)
                    .join("") + " Rs"
                : qunty ==
                  individualData?.product?.quantity[0].split(",").slice(2, 3)
                ? individualData?.product?.price[0]
                    .split(",")
                    .slice(2, 3)
                    .join("") + " Rs"
                : individualData?.product?.price[0]
                    .split(",")
                    .slice(0, 1)
                    .join("") + " Rs"}
            </h3>
            {}
            <span className="text-gray-800 text-xs">
              {individualData?.product?.description[0]}
            </span>
            <p className="text-xs font-bold">
              {individualData?.product?.tags.map((each) => (
                <>{each}</>
              ))}
            </p>
            <form action="" className="mt-4">
              <fieldset>
                <div className="flex">
                  <label htmlFor="" className="font-bold">
                    QUANTITY
                  </label>
                  <select
                    name="qunty"
                    onChange={handleChange}
                    id=""
                    className="mr-2 ml-2 bg-gray-200"
                  >
                    <option
                      disabled
                      value={individualData?.product?.quantity[0]
                        .split(",")
                        .slice(0, 1)}
                    >
                      Select Quantity
                    </option>
                    <option
                      selected
                      value={individualData?.product?.quantity[0]
                        .split(",")
                        .slice(0, 1)}
                    >
                      {individualData?.product?.quantity[0]
                        .split(",")
                        .slice(0, 1)}
                    </option>
                    <option
                      value={individualData?.product?.quantity[0]
                        .split(",")
                        .slice(1, 2)}
                    >
                      {individualData?.product?.quantity[0]
                        .split(",")
                        .slice(1, 2)}
                    </option>
                    <option
                      value={individualData?.product?.quantity[0]
                        .split(",")
                        .slice(2, 3)}
                    >
                      {individualData?.product?.quantity[0]
                        .split(",")
                        .slice(2, 3)}
                    </option>
                  </select>
                  <span>Grams</span>
                </div>
                <button className="border px-8 mt-3 bg-yellow-400 text-white font-extrabold round">
                  Add To Cart
                </button>
              </fieldset>
            </form>
            <ul className="flex mt-4 text-gray-700">
              <li className="text-xs">
                <i className="fa-solid fa-heart"></i> ADD TO WISHLIST
              </li>
              <li className="text-xs ml-6">
                <i className="fa-solid fa-arrows-rotate"></i> ADD TO COMPARE
              </li>
            </ul>
            <ul className="my-6">
              <li className="text-sm">
                <i class="fa-solid fa-shield"></i> Security policy
              </li>
              <li className="text-sm mt-2">
                <i class="fa-solid fa-truck"></i> Delivery policy
              </li>
              <li className="text-sm mt-2">
                <i class="fa-solid fa-right-left"></i> Return policy
              </li>
            </ul>
          </>
        </section>
      </div>

      <div className="container py-10 individual_toggle">
        <div className="flex justify-center">
          <div className="flex_28 flex justify-between">
            <h3
              onClick={() => handleData("Description")}
              className={
                data == "Description"
                  ? "desc px-3 py-2 cursor-pointer"
                  : "px-3 py-2 cursor-pointer"
              }
            >
              Description
            </h3>
            <h3
              onClick={() => handleData("Product Details")}
              className={
                data == "Product Details"
                  ? "desc px-3 py-2 cursor-pointer"
                  : "px-3 py-2 cursor-pointer"
              }
            >
              Product Details
            </h3>
            <h3
              onClick={() => handleData("Reviews")}
              className={
                data == "Reviews"
                  ? "desc px-3 py-2 cursor-pointer"
                  : "px-3 py-2 cursor-pointer"
              }
            >
              Reviews
            </h3>
          </div>
        </div>
        <hr />

        <div className="">
          {data === "Description" ? (
            <div className="mt-14">
              {individualData?.product?.description_list.map((each) => (
                <p className="p-2 text-sm text-center">{each}</p>
              ))}
            </div>
          ) : (
            ""
          )}

          {data === "Product Details" ? (
            <>
              <h3 className="border p-2 inline-block mt-4 font-sans">
                Fishing
              </h3>
              <p className="text-xs mt-2">Reference demo_1</p>
              <div>
                <h4 className="font-extrabold mt-5">Data Sheet</h4>
                <div className="flex justify-between flex-wrap mt-1">
                  <p className="flex_47 border p-3 rounded-md bg-gray-100 my-2">
                    Composition
                  </p>
                  <p className="flex_47 border p-3 rounded-md bg-gray-100 my-2">
                    Property
                  </p>
                  <p className="flex_47 border p-3 rounded-md bg-gray-100 my-2">
                    Ceramic Cotton
                  </p>
                  <p className="flex_47 border p-3 rounded-md bg-gray-100 my-2">
                    Short Sleeves
                  </p>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          {data == "Reviews" ? (
            <>
              <section>
                <div className="py-8">
                  <h5 className="text-sm font-extrabold">Grade</h5>
                  <div className="my-2">
                    <i className="fa-solid fa-star text-md hover:text-yellow-300 text-gray-200"></i>
                    <i className="fa-solid fa-star text-md hover:text-yellow-300 text-gray-200"></i>
                    <i className="fa-solid fa-star text-md hover:text-yellow-300 text-gray-200"></i>
                    <i className="fa-solid fa-star text-md hover:text-yellow-300 text-gray-200"></i>
                    <i className="fa-solid fa-star text-md text-gray-200"></i>
                  </div>
                  <h4 className="text-xs font-extrabold">
                    thao pham 09/10/2020
                  </h4>
                </div>
                <hr className="my-5 opacity-50" />
              </section>
              <section>
                <h4 className="m-2 font-bold">Give your review:</h4>
                <div className="my-2">
                  <i className="fa-solid fa-star text-md hover:text-yellow-300 text-gray-200"></i>
                  <i className="fa-solid fa-star text-md hover:text-yellow-300 text-gray-200"></i>
                  <i className="fa-solid fa-star text-md hover:text-yellow-300 text-gray-200"></i>
                  <i className="fa-solid fa-star text-md hover:text-yellow-300 text-gray-200"></i>
                  <i className="fa-solid fa-star text-md text-gray-200"></i>
                </div>
                <form
                  action=""
                  className={
                    userLogged
                      ? "flex flex-col items-start"
                      : "flex flex-col items-start opacity-40 cursor-not-allowed"
                  }
                  onSubmit={handleSubmit}
                >
                  <textarea
                    disabled={userLogged ? false : true}
                    onChange={handleReviewChange}
                    placeholder="Write your review here"
                    name="review"
                    value={reviewPost.review}
                    className=" rounded-sm border-2 border-orange-200 p-2 w-1/2 "
                  />
                  <button
                    disabled={userLogged ? false : true}
                    className="m-2 bg-black text-white p-2"
                  >
                    Submit
                  </button>
                </form>

                {!userLogged ? (
                  <div className="flex items-center justify-center w-full h-4/12">
                    <article className="flex items-center justify-center w-6/12">
                      <div className="w-6/12">
                        <lottie-player
                          src="https://assets9.lottiefiles.com/packages/lf20_zbakob77.json"
                          background="transparent"
                          speed="1"
                          style={{ width: "140%", height: "100%" }}
                          loop
                          autoplay
                        ></lottie-player>
                      </div>
                      <h3 className="uppercase font-semibold mt-20 w-6/12">
                        login to give review <br />
                        <span className="font-light text-xs lowercase mt-2 inline-block">
                          ( Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Enim, at aperiam tenetur neque eum officia a
                          quae ipsa assumenda qui saepe quibusdam expedita iusto
                          corporis? Beatae quos ipsum placeat dicta! )
                        </span>
                      </h3>
                    </article>
                  </div>
                ) : (
                  ""
                )}

                <div className="mt-8 ">
                  <h3 className="font-bold mb-2">Comments</h3>
                  <hr />
                  {reviews?.Reviews?.map((each) => (
                    <>
                      <article>
                        <p className="my-3">{each.body}</p>
                        {/* <small>{each.author}</small> */}
                      </article>
                    </>
                  ))}
                </div>
              </section>
            </>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="container  py-10">
        <h2 className="text-3xl mt-5 font-extrabold text-center ">
          YOU MIGHT ALSO LIKE
        </h2>
        {!subLoading ? (
          <section className="m-auto flex justify-between items-center flex-wrap my-6">
            {allProducts?.map((each, index) => (
              <>
                <article
                  className="flex_23  mt-2 p-1.5 rounded-lg"
                  onClick={handleIndividule}
                >
                  <NavLink to={`/${each._id}`}>
                    <div className="flex items-center shadow-md border p-2 rounded-lg">
                      <img className="w-5/12" src={each.productImage} alt="" />

                      <div className="ml-8">
                        <h4>{each.productName}</h4>
                        <p className="text-xs font-bold mt-2">
                          {each?.description
                            ? each?.description[0].slice(2, 20) + ". . ."
                            : "On The Way"}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                </article>
              </>
            ))}
          </section>
        ) : (
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
        )}
      </div>
    </>
  );
}
export default withRouter(Individual);
