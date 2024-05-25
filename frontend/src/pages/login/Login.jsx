const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login to
          <span className="text-gray-300"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label">
              <span className="text-base label-text mt-4">Username</span>
            </label>

            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />

            <a
              href="#"
              className="text-sm hover:underline
              mt-2 inline-block label-text"
            >
              {"Dont't"} have an account?
            </a>

            <div>
              <button className="btn btn-block btn-sm mt-2">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;