import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [bookedEvents, setBookedEvents] = useState(
    JSON.parse(localStorage.getItem("bookedEvents")) || []
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const cancelBooking = (eventId) => {
    const updatedEvents = bookedEvents.filter(
      (event) => event.id !== eventId
    );

    setBookedEvents(updatedEvents);

    localStorage.setItem(
      "bookedEvents",
      JSON.stringify(updatedEvents)
    );

    alert("Booking cancelled successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-indigo-600 flex items-center justify-center text-white text-4xl font-bold">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>

          <h1 className="text-3xl font-bold mt-4">
            {user?.name || "User"}
          </h1>

          <p className="text-gray-500">
            {user?.email || "No Email"}
          </p>
        </div>

        {/* User Details */}
        <div className="mt-10 space-y-4">
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-semibold text-gray-700">
              Full Name
            </h3>
            <p>{user?.name || "N/A"}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-semibold text-gray-700">
              Email
            </h3>
            <p>{user?.email || "N/A"}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-semibold text-gray-700">
              Total Bookings
            </h3>
            <p>{bookedEvents.length}</p>
          </div>
        </div>

        {/* Booked Events */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5">
            🎟 My Booked Events
          </h2>

          {bookedEvents.length === 0 ? (
            <div className="bg-gray-50 p-6 rounded-xl text-center text-gray-500">
              No events booked yet.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {bookedEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-gray-50 rounded-xl p-5 border"
                >
                  {event.image && (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                  )}

                  <h3 className="text-xl font-bold">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    📅 {event.date}
                  </p>

                  <p className="text-gray-600 mb-4">
                    📍 {event.location}
                  </p>

                  <button
                    onClick={() =>
                      cancelBooking(event.id)
                    }
                    className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Cancel Booking
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full mt-10 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Account;