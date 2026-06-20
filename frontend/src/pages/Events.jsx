import { useState } from "react";
import events from "../assets/data/data";

function Events() {
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          🎉 Events
        </h1>

        <input
          type="text"
          placeholder="Search event by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 mb-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-bold mb-2">
                  {event.title}
                </h2>

                <p className="text-gray-600 mb-2">
                  {event.description}
                </p>

                <p className="text-gray-600">
                  📅 {event.date}
                </p>

                <p className="text-gray-600">
                  📍 {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center mt-10 text-gray-500">
            No events found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;