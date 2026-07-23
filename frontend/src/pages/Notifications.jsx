import { useState } from "react";

function Notifications() {
  const [bookedEvents, setBookedEvents] = useState(
    JSON.parse(localStorage.getItem("bookedEvents")) || []
  );

  const removeNotification = (id) => {
    const updated = bookedEvents.filter(
      (event) => event.id !== id
    );

    setBookedEvents(updated);

    localStorage.setItem(
      "bookedEvents",
      JSON.stringify(updated)
    );
  };

  const clearAll = () => {
    if (!window.confirm("Clear all notifications?")) return;

    localStorage.removeItem("bookedEvents");
    setBookedEvents([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white overflow-x-hidden">

      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/30 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h1 className="text-5xl font-black">
              🔔 Notifications
            </h1>

            <p className="mt-3 text-gray-300">
              View all your booked event notifications.
            </p>

          </div>

          {bookedEvents.length > 0 && (
            <button
              onClick={clearAll}
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl transition"
            >
              🗑️ Clear All
            </button>
          )}

        </div>

        {/* Empty State */}

        {bookedEvents.length === 0 ? (

          <div className="mt-16 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-16 text-center">

            <div className="text-7xl mb-6">
              🔕
            </div>

            <h2 className="text-3xl font-bold">
              No Notifications
            </h2>

            <p className="mt-4 text-gray-300">
              Book an event to receive notifications.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">

            {bookedEvents.map((event) => (

              <div
                key={event.id}
                className="bg-white text-black rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                {/* Event Image */}

                <div className="relative">

                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-52 object-cover"
                  />

                  <span className="absolute top-4 left-4 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                    ✅ Confirmed
                  </span>

                </div>

                {/* Content */}

                <div className="p-6">

                  <h2 className="text-2xl font-bold">
                    {event.title}
                  </h2>

                  <p className="text-gray-600 mt-4">
                    🎉 Your booking has been confirmed.
                  </p>

                  <div className="mt-6 space-y-2">

                    <p className="text-gray-500">
                      📅 {event.date}
                    </p>

                    <p className="text-gray-500">
                      📍 {event.location}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      removeNotification(event.id)
                    }
                    className="mt-8 w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition"
                  >
                    Remove Notification
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Notifications;