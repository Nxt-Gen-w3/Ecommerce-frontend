import { React, useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
function SignIn(props) {
  const { handleUser, setUserLogged } = props;
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleLogin = () => {
    fetch(
      "https://achaari-couple-k28px.ondigitalocean.app/api/v1/users/login",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: login.email,
            password: login.password,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        localStorage.setItem("userToken", data.user.token);
        if (data.user.token) {
          props.history.push("/");
        }
        let storagekey = localStorage.getItem("userToken");
        if (storagekey) {
          handleUser(storagekey);
        }
        setUserLogged(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

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
    <>
      <div>
        <section className="container py-10 signIn">
          <h2 className="text-center text-3xl font-extrabold">
            Log in to your account
          </h2>
          <form
            action=""
            onSubmit={handleSubmit}
            className="w-6/12 m-auto my-5 p-4 border shadow-md text-gray-700"
          >
            <fieldset>
              <div className="my-2 flex justify-between items-center">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  value={login.email}
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
                  value={login.password}
                  onChange={handleChange}
                  type="password"
                  id="Password"
                  className="ml-8 border-2 border-orange-300 p-2  w-8/12"
                />
              </div>
              {/* <small className="block text-center my-4">
                Forgot Your Password
              </small> */}
              {/* <input
                type="submit"
                className="border p-2 px-4 m-auto block my-5 bg-blue-700 text-white rounded-md"
              /> */}
              <button className="border text-white p-2 rounded-md px-4 m-auto block my-5 bg-blue-700">
                Submit
              </button>
              <hr />
              <p className="text-center text-sm hover:text-yellow-500 my-4">
                <NavLink to="/signup">No Account? Create One Here</NavLink>
              </p>
            </fieldset>
          </form>
        </section>
      </div>
    </>
  );
}
export default withRouter(SignIn);
