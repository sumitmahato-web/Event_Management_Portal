import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Users, Search, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b1120] text-white">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[140px]" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-500/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm mb-6">
              🎉 Discover Trending Events
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Experience
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent">
                {" "}
                Amazing
              </span>
              <br />
              Events Near You
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-8 max-w-xl">
              Find concerts, workshops, hackathons, sports events,
              festivals and much more. Book your seat in seconds.
            </p>

            {/* Search */}
            <div className="mt-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex flex-col md:flex-row gap-3">

              <div className="flex items-center flex-1 px-4">
                <Search size={20} className="text-cyan-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="bg-transparent outline-none w-full px-3 py-3 text-white placeholder:text-gray-400"
                />
              </div>

              <button className="bg-gradient-to-r from-cyan-500 to-indigo-500 px-8 py-3 rounded-xl font-semibold hover:scale-105 duration-300">
                Search
              </button>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/events"
                className="bg-gradient-to-r from-cyan-500 to-indigo-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 duration-300 shadow-lg"
              >
                Explore Events
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/addevent"
                className="border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 duration-300"
              >
                Create Event
              </Link>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-5 mt-12">

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
                <h2 className="text-3xl font-bold">500+</h2>
                <p className="text-gray-400 mt-2">Events</p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
                <h2 className="text-3xl font-bold">15K+</h2>
                <p className="text-gray-400 mt-2">Users</p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
                <h2 className="text-3xl font-bold">100+</h2>
                <p className="text-gray-400 mt-2">Cities</p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative hidden lg:block">

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900"
                alt="Event"
                className="rounded-2xl h-[420px] w-full object-cover"
              />

              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3">
                  <CalendarDays className="text-cyan-400" />
                  <span>28 July 2026</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-pink-400" />
                  <span>Ranchi, Jharkhand</span>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="text-green-400" />
                  <span>1200 Attendees</span>
                </div>

              </div>

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -left-8 bg-[#111827] border border-white/10 rounded-2xl p-5 shadow-xl">

              <p className="text-gray-400 text-sm">Upcoming Event</p>

              <h3 className="text-xl font-bold mt-1">
                Tech Summit 2026
              </h3>

              <p className="text-cyan-400 mt-2">
                ⭐ 4.9 Rating
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;