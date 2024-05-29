import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col bg-zinc-800 items-center justify-center min-w-96 mx-auto rounded-lg">
      <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Login to
          <span className="text-gray-200"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className="text-base label-text mt-4 text-white">
                Username
              </span>
            </label>

            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 text-slate-100 bg-zinc-700"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-zinc-700 text-white "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link
              to="/signup"
              className="text-sm hover:underline
              mt-2 inline-block label-text text-white"
            >
              {"Dont't"} have an account?
            </Link>

            <div>
              <button
                className="btn btn-block btn-sm input-bordered mt-2 bg-zinc-700 hover:bg-zinc-600 hover:input-bordered text-white"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
