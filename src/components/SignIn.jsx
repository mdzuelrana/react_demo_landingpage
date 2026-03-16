import React from "react";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Sign In</h2>

          <form className="space-y-4">

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
                placeholder="Enter password"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-sm" />
                Remember me
              </label>

              <a href="#" className="link link-primary">
                Forgot password?
              </a>
            </div>

            <button className="btn btn-primary w-full">
              Sign In
            </button>

          </form>

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="link link-primary">
              Sign Up
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignIn;