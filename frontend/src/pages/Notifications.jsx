function Notifications() {
  const bookedEvents =
    JSON.parse(localStorage.getItem("bookedEvents")) || [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          🔔 Notifications
        </h1>

        {bookedEvents.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <p className="text-gray-500">
              No notifications available.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookedEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-5 border-l-4 border-indigo-600"
              >
                <h2 className="font-bold text-lg">
                  Booking Confirmed 🎉
                </h2>

                <p className="text-gray-600 mt-2">
                  You have successfully booked:
                </p>

                <p className="font-semibold">
                  {event.title}
                </p>

                <p className="text-gray-500">
                  📅 {event.date}
                </p>

                <p className="text-gray-500">
                  📍 {event.location}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Notifications;