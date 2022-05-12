import React from "react";
import { NavLink } from "react-router-dom";
function SignIn() {
  return (
    <>
      <div>
        <section className="container py-10">
          <h2 className="text-center text-3xl font-extrabold">
            Log in to your account
          </h2>
          <form
            action=""
            className="w-4/12 m-auto my-5 p-4 border shadow-md text-gray-700"
          >
            <fieldset>
              <div className="my-2 flex justify-between items-center">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  id="Email"
                  className="ml-8 p-2 bg-none w-8/12"
                />
              </div>

              <div className="my-2 flex justify-between items-center">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  id="Password"
                  className="ml-8 p-2 bg-none w-8/12"
                />
              </div>
              <small className="block text-center my-4">
                Forgot Your Password
              </small>
              <input
                type="submit"
                className="border p-2 px-4 m-auto block my-5 bg-blue-700 text-white rounded-md"
              />
              <hr />
              <p className="text-center text-sm hover:text-yellow-500 my-4">
                <NavLink to="/signUp">No Account? Create One Here</NavLink>
              </p>
            </fieldset>
          </form>
        </section>
      </div>
    </>
  );
}
export default SignIn;
