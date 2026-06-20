function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
      <img
        src={event.image}
        alt={event.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">
          {event.title}
        </h2>

        <p className="text-gray-600 mb-3">
          {event.description}
        </p>

        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>📍 {event.location}</span>
          <span>📅 {event.date}</span>
        </div>

        <button onClick={() => bookEvent(event)} className="w-full bg-indigo-600 text-white py-2 rounded-lg">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default EventCard;