import { Link } from "react-router-dom";

function Afterlogin() {
  const events = [
    {
      id: 1,
      title: "Tech Conference 2026",
      date: "15 Aug 2026",
      location: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    },
    {
      id: 2,
      title: "Music Festival",
      date: "20 Aug 2026",
      location: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    },
    {
      id: 3,
      title: "Startup Meetup",
      date: "10 Sep 2026",
      location: "Delhi",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    },
  ];

  const bookEvent = (event) => {
    const bookedEvents =
      JSON.parse(localStorage.getItem("bookedEvents")) || [];

    const alreadyBooked = bookedEvents.find(
      (item) => item.id === event.id
    );

    if (alreadyBooked) {
      alert("You have already booked this event.");
      return;
    }

    bookedEvents.push(event);

    localStorage.setItem(
      "bookedEvents",
      JSON.stringify(bookedEvents)
    );

    alert(`Successfully booked "${event.title}" 🎉`);
  };

  const notificationCount =
    (
      JSON.parse(
        localStorage.getItem("bookedEvents")
      ) || []
    ).length;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">
            Eventify 🎉
          </h1>

          <div className="flex items-center gap-8">
          <Link
            to="/events"
            className="hover:text-indigo-600"
          >
            Events
          </Link>

            <Link to="/about" className="hover:text-indigo-600">
              About
            </Link>

            <Link
              to="/notifications"
              className="relative hover:text-indigo-600"
            >
              Notifications

              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                {notificationCount}
              </span>
            </Link>

            <Link to="/addevent" className="hover:text-indigo-600">
              Add Event
            </Link>

            <Link
              to="/account"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Account
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">
            Discover Amazing Events
          </h1>

          <p className="text-xl mb-8">
            Book concerts, tech conferences,
            workshops and festivals.
          </p>

          <Link
            to="/events"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100"
          >
            Explore Events
          </Link>
        </div>
      </section>

      {/* Events Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  {event.title}
                </h3>

                <p className="text-gray-600 mb-2">
                  📅 {event.date}
                </p>

                <p className="text-gray-600 mb-4">
                  📍 {event.location}
                </p>

                <button
                  onClick={() => bookEvent(event)}
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-10 py-6 text-center text-gray-600">
        © 2026 Eventify. All rights reserved.
      </footer>
    </div>
  );
}

export default Afterlogin;