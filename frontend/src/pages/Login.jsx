import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        "https://eventmanagementportal-1fds.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("🎉 Login Successful");

      navigate("/afterlogin");
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Login Failed"
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black flex items-center justify-center px-4 overflow-hidden">

      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/30 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-[180px] rounded-full"></div>

      {/* Login Card */}

      <div className="relative z-10 w-full max-w-md">

        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8">

          {/* Logo */}

          <div className="text-center">

            <div className="text-6xl">
              🎉
            </div>

            <h1 className="text-4xl font-black text-white mt-4">

              Eventify

            </h1>

            <p className="text-gray-300 mt-3">

              Welcome back! Login to continue.

            </p>

          </div>

          {/* Form */}

          <form
            onSubmit={handleLogin}
            className="mt-10 space-y-6"
          >

            <div>

              <label className="text-gray-200 block mb-2">

                Email Address

              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
                className="w-full bg-white rounded-xl px-4 py-3 outline-none text-black"
              />

            </div>

            <div>

              <label className="text-gray-200 block mb-2">

                Password

              </label>

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  required
                  className="w-full bg-white rounded-xl px-4 py-3 pr-14 outline-none text-black"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-4 top-3 text-xl"
                >
                  {showPassword
                    ? "🙈"
                    : "👁️"}
                </button>

              </div>

            </div>

            <div className="flex justify-between text-sm">

              <label className="flex items-center gap-2 text-gray-300">

                <input type="checkbox" />

                Remember Me

              </label>

              <Link
                to="/forgotpassword"
                className="text-cyan-300 hover:text-cyan-400"
              >
                Forgot Password?
              </Link>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:scale-105 transition"
            >
              {loading
                ? "Logging in..."
                : "🚀 Login"}
            </button>

          </form>

          {/* Signup */}

          <p className="text-center text-gray-300 mt-8">

            Don't have an account?

            <Link
              to="/signup"
              className="text-cyan-300 ml-2 font-semibold hover:text-cyan-400"
            >
              Sign Up
            </Link>

          </p>

          {/* Footer */}

          <div className="mt-10 text-center text-sm text-gray-400">

            Secure Login • Eventify © 2026

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;