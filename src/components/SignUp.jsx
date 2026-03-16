import React from "react";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">

          <h2 className="text-2xl font-bold text-center">
            Create Account
          </h2>

          <form className="space-y-4">

            <div className="form-control">
              <label className="label">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">Password</label>
              <input
                type="password"
                placeholder="Create password"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered w-full"
              />
            </div>

            <button className="btn btn-primary w-full">
              Sign Up
            </button>

          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a href="/signin" className="link link-primary">
              Sign In
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignUp;