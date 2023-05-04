import { Button, Checkbox, Label } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Terms from "../../Shared/Terms/Terms";

const Register = () => {
  return (
    <>
      <div className="max-w-lg mx-auto my-10 rounded-md border p-10 shadow-md hover:shadow-2xl duration-500">
        <h2 className="text-2xl font-bold text-center mb-8">Register</h2>
        <form className="flex flex-col gap-4">
          {/* {error && (
            <span className="my-5 text-center text-orange-400 font-medium border border-orange-400 p-2 rounded">
              {error}
            </span>
          )}
          {success && (
            <span className="my-5 text-center text-blue-600 font-medium border border-blue-500 p-2 rounded">
              {success}
            </span>
          )} */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <input
              className="w-full rounded py-3.5 px-5 border-0 outline outline-1 outline-gray-400 focus:outline-gray-700 focus:outline-0 bg-gray-100 text-sm"
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <input
              className="w-full rounded py-3.5 px-5 border-0 outline outline-1 outline-gray-400 focus:outline-gray-700 focus:outline-0 bg-gray-100 text-sm"
              id="email"
              type="email"
              name="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photo" value="photo" />
            </div>
            <input
              className="w-full rounded py-3.5 px-5 border-0 outline outline-1 outline-gray-400 focus:outline-gray-700 focus:outline-0 bg-gray-100 text-sm"
              id="photo"
              type="text"
              name="photo"
              placeholder="Photo URL"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="password" />
            </div>
            <input
              className="w-full rounded py-3.5 px-5 border-0 outline outline-1 outline-gray-400 focus:outline-gray-700 focus:outline-0 bg-gray-100 text-sm"
              id="password2"
              type="password"
              name="password"
              placeholder="******"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree">
              I agree with the
              <a className="text-blue-600 hover:underline dark:text-blue-500">
                {"  "}
                Terms and Conditions
              </a>
            </Label>
          </div>
          <button className="my-2 rounded-md bg-gray-700 text-white text-lg w-full p-3 font-semibold">
            Register
          </button>
          <div className="text-center mt-0">
            <p>
              Already a member?{" "}
              <span className="text-blue-500 font-semibold">
                <Link to="/login">Login</Link>
              </span>{" "}
            </p>
            {/* <div className="my-5 flex items-center gap-6">
            <span className="bg-gray-200 h-0.5 w-full"></span>
            <p>or</p>
            <span className="bg-gray-200 h-0.5 w-full"></span>
          </div>
          <div className="space-y-2">
            <button className="flex items-center justify-center gap-4 border-2 rounded-md border-blue-200 w-full p-3 font-medium">
              <FaGoogle className="text-xl" /> Continue With Google
            </button>
            <button className="flex items-center justify-center gap-4 border-2 rounded-md border-blue-200 w-full p-3 font-medium">
              <FaFacebook className="text-xl" /> Continue With Facebook
            </button>
          </div> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
