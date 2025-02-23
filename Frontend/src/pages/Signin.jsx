import React from "react";

const Signin = () => {
  return (
    <div className="h-screen flex">
 
    <div className="w-1/2 bg-white flex items-center justify-center">
           
        <form className="w-full max-w-md space-y-4">
        <h2 className="text-3xl text-black text-center font-semibold mb-6  font-[Poppins]">SIGN IN</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded text-gray-700 bg-blue-50 border border-gray-100 focus:outline-none focus:border-blue-200"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded text-gray-700 bg-blue-50 border border-gray-100 focus:outline-none focus:border-blue-200"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded text-gray-700 bg-blue-50 border border-gray-100 focus:outline-none focus:border-blue-200"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded text-gray-700 bg-blue-50 border border-gray-100 focus:outline-none focus:border-blue-200"
          />
          <a href="#" className="text-red-500 text-sm block text-right">
            Forgot Password?
          </a>
          <button className="w-full bg-black p-3 rounded hover:bg-gray-700">
            Sign up
          </button>

          <p className="text-gray-800 text-sm text-center mt-4">
            Have an account?{" "}
            <a href="" className="text-blue-400">
              Sign in
            </a>
          </p>
        </form>
      </div>

      {/* Right Side - Image */}
        <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <img alt="Decorate"></img>
      </div>
    </div>
  );
};

export default Signin;
