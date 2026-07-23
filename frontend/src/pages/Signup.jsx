import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "https://eventmanagementportal-1fds.onrender.com/api/auth/signup",
        {
          name,
          email,
          password,
        }
      );

      alert(res.data.message);

      navigate("/login");
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Signup Failed"
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black flex items-center justify-center px-4 overflow-hidden">

      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/30 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-[180px] rounded-full"></div>

      {/* Signup Card */}

      <div className="relative z-10 w-full max-w-md">

        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8">

          {/* Logo */}

          <div className="text-center">

            <div className="text-6xl">
              🚀
            </div>

            <h1 className="text-4xl font-black text-white mt-4">

              Create Account

            </h1>

            <p className="text-gray-300 mt-3">

              Join Eventify and start exploring amazing events.

            </p>

          </div>

          {/* Form */}

          <form
            onSubmit={handleSignup}
            className="mt-10 space-y-5"
          >

            <div>

              <label className="block text-gray-200 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
                className="w-full bg-white text-black rounded-xl px-4 py-3 outline-none"
              />

            </div>

            <div>

              <label className="block text-gray-200 mb-2">
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
                className="w-full bg-white text-black rounded-xl px-4 py-3 outline-none"
              />

            </div>

            <div>

              <label className="block text-gray-200 mb-2">
                Password
              </label>

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  required
                  className="w-full bg-white text-black rounded-xl px-4 py-3 pr-14 outline-none"
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

            <div>

              <label className="block text-gray-200 mb-2">
                Confirm Password
              </label>

              <div className="relative">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  required
                  className="w-full bg-white text-black rounded-xl px-4 py-3 pr-14 outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-4 top-3 text-xl"
                >
                  {showConfirmPassword
                    ? "🙈"
                    : "👁️"}
                </button>

              </div>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:scale-105 transition disabled:opacity-60"
            >
              {loading
                ? "Creating Account..."
                : "🚀 Create Account"}
            </button>

          </form>

          {/* Login */}

          <p className="text-center text-gray-300 mt-8">

            Already have an account?

            <Link
              to="/login"
              className="text-cyan-300 ml-2 font-semibold hover:text-cyan-400"
            >
              Login
            </Link>

          </p>

          {/* Footer */}

          <div className="mt-8 text-center text-sm text-gray-400">

            By signing up you agree to our Terms & Privacy Policy

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;