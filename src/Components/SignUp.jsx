import React from "react";
import { NavLink } from "react-router-dom";
function SignUp() {
  return (
    <>
      <div>
        <section className="container py-10">
          <h2 className="text-center text-3xl font-extrabold">
            Create an account
          </h2>
          <form action="" className="w-4/12 m-auto my-5 p-4 border shadow-md">
            <fieldset>
              <div className="my-2 flex justify-between items-center">
                <span className="text-sm">
                  Already have an account? Log in instead!
                </span>
              </div>

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
                <label htmlFor="FirstName">FirstName</label>
                <input
                  type="text"
                  id="FirstName"
                  className="ml-8 p-2 border w-8/12"
                />
              </div>

              <div className="my-2 flex justify-between items-center">
                <label htmlFor="LastName">LastName</label>
                <input
                  type="text"
                  id="LastName"
                  className="ml-8 p-2 border w-8/12"
                />
              </div>

              <div className="my-2 flex justify-between items-center">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="ml-8 p-2 border w-8/12"
                />
              </div>

              <div className="my-2 flex justify-between items-center">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  id="Password"
                  className="ml-8 p-2 border w-8/12"
                />
              </div>

              <div className="my-2 flex justify-between items-center">
                <label htmlFor="Birthday">Birthday</label>
                <input
                  type="date  "
                  id="Birthday"
                  className="ml-8 p-2 border w-8/12"
                />
              </div>

              <div className="flex justify-end w-full items-end">
                <input
                  type="submit"
                  className="border p-2 px-4 block my-5 bg-blue-700 text-white rounded-md"
                />
              </div>
              <hr />
              <p className="text-center text-sm hover:text-yellow-500 my-4">
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
export default SignUp;
