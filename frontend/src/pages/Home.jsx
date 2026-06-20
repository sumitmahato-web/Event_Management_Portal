import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-3xl font-bold">Eventify 🎉</h1>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="border-2 border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <h1 className="text-6xl font-bold mb-6">
          Welcome to Eventify
        </h1>

        <p className="text-xl mb-8">
          Discover and book amazing events.
        </p>

        <Link
          to="/login"
          className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Home;