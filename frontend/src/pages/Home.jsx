import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-black text-white">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[180px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-[180px] opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500 rounded-full blur-[150px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-10 py-6">
        <h1 className="text-3xl font-extrabold tracking-wide">
          🎉 Eventify
        </h1>

        <div className="flex items-center gap-5 bg-white/10 backdrop-blur-lg px-5 py-3 rounded-full border border-white/20">
          <Link
            to="/login"
            className="hover:text-indigo-300 transition duration-300"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 rounded-full hover:scale-105 transition duration-300 shadow-lg"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-[85vh] px-6">

        <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-sm mb-8">
          ✨ India's Modern Event Platform
        </span>

        <h1 className="text-6xl md:text-8xl font-black leading-tight">
          Discover
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}Amazing{" "}
          </span>
          Events
        </h1>

        <p className="max-w-2xl mt-8 text-gray-300 text-xl leading-8">
          Book concerts, hackathons, workshops, college fests, sports,
          conferences and much more—all in one place.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">

          <Link
            to="/login"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold shadow-2xl hover:scale-105 transition duration-300"
          >
            🚀 Get Started
          </Link>

          <Link
            to="/signup"
            className="px-8 py-4 rounded-xl border border-white/30 backdrop-blur-md hover:bg-white/10 transition duration-300"
          >
            Create Account
          </Link>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-10 mt-20 bg-white/10 backdrop-blur-xl rounded-3xl px-10 py-8 border border-white/10">

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">500+</h2>
            <p className="text-gray-300 mt-2">Events</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-pink-400">10K+</h2>
            <p className="text-gray-300 mt-2">Users</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-green-400">100+</h2>
            <p className="text-gray-300 mt-2">Organizers</p>
          </div>

        </div>

      </section>
    </div>
  );
}

export default Home;