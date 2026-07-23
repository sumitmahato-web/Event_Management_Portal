import { useState, useEffect } from "react";
import defaultEvents from "../assets/data/data";


function Events() {
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {

  const savedEvents =
    JSON.parse(localStorage.getItem("events")) || [];

  setEvents([
    ...defaultEvents,
    ...savedEvents
  ]);

}, []);

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (!selectedEvent) return;

    const saved =
      JSON.parse(
        localStorage.getItem(`comments-${selectedEvent.id}`)
      ) || [];

    setComments(saved);
  }, [selectedEvent]);

  const postComment = () => {
    if (!comment.trim()) return;

    const newComment = {
      id: Date.now(),
      user: "Guest",
      text: comment,
    };

    const updated = [...comments, newComment];

    setComments(updated);

    localStorage.setItem(
      `comments-${selectedEvent.id}`,
      JSON.stringify(updated)
    );

    setComment("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white">

      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/30 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-14">

        <h1 className="text-5xl font-black text-center">
          🎉 Explore Events
        </h1>

        <p className="text-center text-gray-300 mt-4">
          Find amazing events happening around you.
        </p>

<div className="flex justify-center mt-10">

  <div className="relative w-full md:w-[550px]">

    {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
          <span className="text-xl text-gray-400">
            🔍
          </span>
        </div>

        <input
          type="text"
          placeholder="Search events or locations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            pl-14
            pr-5
            py-4
            rounded-2xl
            bg-white/10
            border
            border-white/20
            backdrop-blur-lg
            text-white
            placeholder-gray-400
            shadow-xl
            outline-none
            focus:border-purple-500
            focus:ring-2
            focus:ring-purple-500/50
            transition-all
            duration-300
          "
        />

      </div>

    </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">

          {filteredEvents.map((event) => (

            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer bg-white text-black rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-500"
            >

              <div className="relative">

                <img
                  src={event.image}
                  alt={event.title}
                  className="h-64 w-full object-cover hover:scale-110 transition duration-700"
                />

                <span className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
                  🔥 Trending
                </span>

              </div>

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  {event.title}
                </h2>

                <p className="text-gray-600 mt-3 line-clamp-3">
                  {event.description}
                </p>

                <div className="flex justify-between mt-5">

                  <span>
                    📍 {event.location}
                  </span>

                  <span>
                    📅 {event.date}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

        {filteredEvents.length === 0 && (
          <h2 className="text-center mt-12 text-gray-400">
            No events found.
          </h2>
        )}
                {/* ================= EVENT MODAL ================= */}

        {selectedEvent && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">

            <div className="bg-white text-black rounded-3xl overflow-hidden w-full max-w-4xl max-h-[95vh] overflow-y-auto relative shadow-2xl">

              {/* Close Button */}

              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-5 right-5 bg-red-500 text-white w-10 h-10 rounded-full hover:bg-red-600 transition"
              >
                ✕
              </button>

              {/* Event Image */}

              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-72 md:h-96 object-cover"
              />

              <div className="p-8">

                <h1 className="text-4xl font-bold">
                  {selectedEvent.title}
                </h1>

                <div className="flex flex-wrap gap-6 mt-5 text-gray-600">

                  <span>📍 {selectedEvent.location}</span>

                  <span>📅 {selectedEvent.date}</span>

                </div>

                {/* Rating */}

                <div className="mt-8">

                  <h2 className="text-2xl font-bold mb-3">
                    Rating
                  </h2>

                  <div className="flex items-center gap-1">

                    {[1,2,3,4,5].map((star)=>(
                      <span
                        key={star}
                        className={
                          star <= (selectedEvent.rating || 4)
                            ? "text-yellow-400 text-3xl"
                            : "text-gray-300 text-3xl"
                        }
                      >
                        ★
                      </span>
                    ))}

                    <span className="ml-3 font-semibold">
                      {(selectedEvent.rating || 4)} / 5
                    </span>

                  </div>

                </div>

                {/* Description */}

                <div className="mt-10">

                  <h2 className="text-2xl font-bold mb-4">
                    About Event
                  </h2>

                  <p className="text-gray-700 leading-8">

                    {selectedEvent.description}

                    <br /><br />

                    Join this amazing event and connect with
                    people who share your interests.
                    Learn from experts, participate in
                    exciting activities and create
                    unforgettable memories.

                  </p>

                </div>

                {/* Comments */}

                <div className="mt-12">

                  <h2 className="text-2xl font-bold">
                    Comments
                  </h2>

                  <div className="space-y-4 mt-6 max-h-60 overflow-y-auto">

                    {comments.length === 0 ? (

                      <div className="bg-gray-100 p-5 rounded-xl text-gray-500">
                        No comments yet.
                      </div>

                    ) : (

                      comments.map((item)=>(
                        <div
                          key={item.id}
                          className="bg-gray-100 rounded-xl p-4"
                        >

                          <h3 className="font-bold">
                            👤 {item.user}
                          </h3>

                          <p className="mt-2">
                            {item.text}
                          </p>

                        </div>
                      ))

                    )}

                  </div>

                  {/* Add Comment */}

                  <textarea
                    value={comment}
                    onChange={(e)=>setComment(e.target.value)}
                    placeholder="Write your comment..."
                    className="mt-8 w-full border rounded-xl p-4 h-32 resize-none focus:ring-2 focus:ring-indigo-500 outline-none"
                  />

                  <div className="flex flex-col md:flex-row gap-4 mt-6">

                    <button
                      onClick={postComment}
                      className="flex-1 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
                    >
                      💬 Post Comment
                    </button>

                    <button
                      onClick={()=>{
                        const booked =
                          JSON.parse(localStorage.getItem("bookedEvents")) || [];

                        const exists = booked.find(
                          (e)=>e.id===selectedEvent.id
                        );

                        if(exists){
                          alert("Already Booked!");
                          return;
                        }

                        booked.push(selectedEvent);

                        localStorage.setItem(
                          "bookedEvents",
                          JSON.stringify(booked)
                        );

                        alert("Event Booked Successfully 🎉");
                      }}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl hover:scale-105 transition"
                    >
                      🎟️ Book Event
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Events;