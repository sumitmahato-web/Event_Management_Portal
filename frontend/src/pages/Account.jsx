import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const [bookedEvents, setBookedEvents] = useState(
    JSON.parse(localStorage.getItem("bookedEvents")) || []
  );

  const cancelBooking = (id) => {
    const updated = bookedEvents.filter(
      (event) => event.id !== id
    );

    setBookedEvents(updated);

    localStorage.setItem(
      "bookedEvents",
      JSON.stringify(updated)
    );

    alert("Booking Cancelled!");
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white overflow-x-hidden">

      {/* Background */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/30 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

        {/* Profile Card */}

        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl">

          <div className="flex flex-col lg:flex-row items-center gap-10">

            <div className="w-36 h-36 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-6xl font-bold shadow-xl">

              {user?.name?.charAt(0)?.toUpperCase() || "U"}

            </div>

            <div className="text-center lg:text-left flex-1">

              <h1 className="text-5xl font-black">

                {user?.name || "Guest User"}

              </h1>

              <p className="text-gray-300 mt-4 text-lg">

                {user?.email || "guest@email.com"}

              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

                <div className="bg-white/10 rounded-2xl p-6 text-center">

                  <h2 className="text-3xl font-bold text-cyan-400">

                    {bookedEvents.length}

                  </h2>

                  <p className="text-gray-300 mt-2">

                    Bookings

                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-6 text-center">

                  <h2 className="text-3xl font-bold text-yellow-400">

                    ⭐ 4.9

                  </h2>

                  <p className="text-gray-300 mt-2">

                    Rating

                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-6 text-center">

                  <h2 className="text-3xl font-bold text-green-400">

                    100%

                  </h2>

                  <p className="text-gray-300 mt-2">

                    Active

                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-6 text-center">

                  <h2 className="text-3xl font-bold text-pink-400">

                    VIP

                  </h2>

                  <p className="text-gray-300 mt-2">

                    Status

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Booked Events */}

        <section className="mt-16">

          <h2 className="text-4xl font-bold mb-10">

            🎟 My Booked Events

          </h2>

          {bookedEvents.length === 0 ? (

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-14 text-center">

              <div className="text-7xl">

                🎫

              </div>

              <h3 className="text-3xl font-bold mt-6">

                No Bookings Yet

              </h3>

              <p className="text-gray-300 mt-4">

                Start exploring and book your favorite
                events.

              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

              {bookedEvents.map((event) => (

                <div
                  key={event.id}
                  className="bg-white text-black rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition"
                >

                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-52 object-cover"
                  />

                  <div className="p-6">

                    <h3 className="text-2xl font-bold">

                      {event.title}

                    </h3>

                    <p className="mt-3 text-gray-600">

                      📅 {event.date}

                    </p>

                    <p className="text-gray-600">

                      📍 {event.location}

                    </p>

                    <div className="flex mt-5">

                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={
                            star <= (event.rating || 4)
                              ? "text-yellow-400 text-xl"
                              : "text-gray-300 text-xl"
                          }
                        >
                          ★
                        </span>
                      ))}

                    </div>

                    <button
                      onClick={() =>
                        cancelBooking(event.id)
                      }
                      className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
                    >
                      ❌ Cancel Booking
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>

        {/* Logout */}

        <button
          onClick={logout}
          className="mt-16 w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-4 rounded-2xl text-xl font-bold hover:scale-[1.02] transition"
        >
          🚪 Logout
        </button>

      </div>

    </div>
  );
}

export default Account;