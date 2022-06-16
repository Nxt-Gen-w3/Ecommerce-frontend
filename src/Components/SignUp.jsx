import { React, useEffect, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
function SignUp(props) {
  const [register, setRegister] = useState({
    username: "",
    bio: "",
    email: "",
    password: "",
    image: "",
  });
  useEffect(() => {
    console.log(props);
  }, []);

  const handleRegister = () => {
    fetch(
      "https://octopus-app-cgw6x.ondigitalocean.app/api/v1/users/register",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: register.email,
            username: register.username,
            password: register.password,
            bio: register.bio,
            image: register.image,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegister();
    props.history.push("/signin");
  };
  return (
    <>
      <div>
        <section className="container py-10 signUp">
          <h2 className="text-center text-3xl font-extrabold">
            Create an account
          </h2>
          <form
            action=""
            onSubmit={handleSubmit}
            className="w-6/12 m-auto my-5 p-4 border shadow-md"
          >
            <fieldset>
              <div className="my-2 flex justify-between items-center"></div>

              <div className="my-2 flex justify-between items-center">
                <label htmlFor="SocialTitle">Social Title</label>
                <div className="flex ml-8 p-2 bg-none w-8/12">
                  <div className="ml-3">
                    <input type="radio" id="mrs" />
                    <label className="ml-2" htmlFor="mrs">
                      Mrs
                    </label>
                  </div>

                  <div className="ml-3">
                    <input type="radio" id="mr" />
                    <label className="ml-2" htmlFor="mr">
                      Mr
                    </label>
                  </div>
                </div>
              </div>

              <div className="my-2 flex justify-between items-center">
                <label htmlFor="FirstName">Username</label>
                <input
                  type="text"
                  id="FirstName"
                  name="username"
                  value={register.username}
                  onChange={handleChange}
                  className="ml-8 border-2 border-orange-300 p-2  w-8/12"
                />
              </div>

              <div className="my-2 flex justify-between items-center">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  value={register.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  className="ml-8  p-2 border-2 border-orange-300 w-8/12"
                />
              </div>

              <div className="my-2 flex justify-between items-center">
                <label htmlFor="Password">Password</label>
                <input
                  name="password"
                  value={register.password}
                  onChange={handleChange}
                  type="password"
                  id="Password"
                  className="ml-8 border-2 border-orange-300 p-2  w-8/12"
                />
              </div>
              <div className="my-2 flex justify-between items-center">
                <label htmlFor="LastName">Bio</label>
                <input
                  name="bio"
                  value={register.bio}
                  onChange={handleChange}
                  type="text"
                  id="LastName"
                  className="ml-8 border-2 border-orange-300 p-2  w-8/12"
                />
              </div>

              <div className="my-2 flex justify-between items-center">
                <label htmlFor="Password">Image</label>
                <input
                  name="image"
                  value={register.image}
                  onChange={handleChange}
                  type="text"
                  id="Password"
                  className="ml-8 border-2 border-orange-300 p-2  w-8/12"
                />
              </div>

              {/* <div className="my-2 flex justify-between items-center">
                <label htmlFor="Birthday">Birthday</label>
                <input
                  type="date  "
                  id="Birthday"
                  className="ml-8 border-2 border-orange-300 p-2  w-8/12"
                />
              </div> */}

              <div className="flex justify-end w-full items-end">
                {/* <input
                  type="submit"
                  className="border p-2 px-4 block my-5 bg-blue-700 text-white rounded-md"
                /> */}
                <button className="border p-2 px-4 block my-5 bg-blue-700 text-white rounded-md">
                  Submit
                </button>
              </div>
              <hr />
              <p className="text-center text-sm hover:text-yellow-700 my-4">
                <NavLink to="/signIn">
                  Do you have already Account ? Sign In
                </NavLink>
              </p>
            </fieldset>
          </form>
        </section>
      </div>
    </>
  );
}
export default withRouter(SignUp);
