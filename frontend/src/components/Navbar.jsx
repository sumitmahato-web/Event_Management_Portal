import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">
          Eventify
        </h1>

        <div className="flex gap-6">
          <Link to="" className="hover:text-indigo-600">
            Home
          </Link>

          <Link to="/" className="hover:text-indigo-600">
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;