import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Afterlogin() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const events = [
    {
      id: 1,
      title: "Tech Conference 2026",
      description:
        "Join India's biggest technology conference with industry experts, startups, AI workshops and networking sessions.",
      date: "15 Aug 2026",
      location: "Bangalore",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
    },
    {
      id: 2,
      title: "Music Festival",
      description:
        "Experience live performances from India's top artists with food stalls, DJs and unforgettable memories.",
      date: "20 Aug 2026",
      location: "Mumbai",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200",
    },
    {
      id: 3,
      title: "Startup Meetup",
      description:
        "Meet startup founders, investors and developers. Learn about entrepreneurship and build your network.",
      date: "10 Sep 2026",
      location: "Delhi",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    },
    {
      id: 4,
      title: "Gaming Championship",
      description:
        "National esports tournament featuring PUBG, Valorant, CS2 and FIFA competitions.",
      date: "18 Sep 2026",
      location: "Hyderabad",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200",
    },
    {
      id: 5,
      title: "Photography Workshop",
      description:
        "Learn portrait, wildlife and street photography from professional photographers.",
      date: "25 Sep 2026",
      location: "Kolkata",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200",
    },
    {
      id: 6,
      title: "Food Carnival",
      description:
        "Taste delicious cuisines from across India with live cooking shows and competitions.",
      date: "2 Oct 2026",
      location: "Chennai",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200",
    },
  ];

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase())
  );

  const notificationCount =
    JSON.parse(localStorage.getItem("bookedEvents"))?.length || 0;

  const bookEvent = (event) => {
    const booked =
      JSON.parse(localStorage.getItem("bookedEvents")) || [];

    const alreadyBooked = booked.find((e) => e.id === event.id);

    if (alreadyBooked) {
      alert("You already booked this event.");
      return;
    }

    booked.push(event);

    localStorage.setItem(
      "bookedEvents",
      JSON.stringify(booked)
    );

    alert(`Successfully booked "${event.title}" 🎉`);
  };

  useEffect(() => {
    if (!selectedEvent) return;

    const saved =
      JSON.parse(
        localStorage.getItem(
          `comments-${selectedEvent.id}`
        )
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white overflow-x-hidden">

      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[180px] opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-[180px] opacity-30"></div>

      {/* Navbar */}

      <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            🎉 Eventify
          </h1>

          <div className="hidden md:flex items-center gap-8">

            <Link to="/events" className="hover:text-cyan-300">
              Events
            </Link>

            <Link to="/about" className="hover:text-cyan-300">
              About
            </Link>

            <Link
              to="/notifications"
              className="relative hover:text-cyan-300"
            >
              🔔

              <span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notificationCount}
              </span>

            </Link>

            <Link
              to="/addevent"
              className="bg-pink-600 px-5 py-2 rounded-full"
            >
              + Add Event
            </Link>

            <Link
              to="/account"
              className="bg-cyan-600 px-5 py-2 rounded-full"
            >
              Account
            </Link>

          </div>

        </div>

      </nav>
          {/* ================= HERO SECTION ================= */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-sm">
            🔥 Trending Events 2026
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Find Your
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Next Experience
            </span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-gray-300 text-lg">
            Discover concerts, conferences, workshops,
            startup meetups, gaming tournaments and much
            more happening near you.
          </p>

        </div>

        {/* Search */}

        {/* ================= Fancy Search ================= */}

<div className="mt-14 flex justify-center">

  <div
    onClick={() => navigate("/events")}
    className="group relative w-full max-w-3xl cursor-pointer"
  >

    {/* Glow */}

    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 blur opacity-70 group-hover:opacity-100 transition duration-500"></div>

    {/* Search Box */}

    <div className="relative flex items-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-6 py-4">

          <div className="text-2xl mr-4">
            🔍
          </div>

          <input
            type="text"
            placeholder="Search 500+ Events, Workshops, Concerts..."
            className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-300 cursor-pointer"
            readOnly
          />

          <button className="ml-4 bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Explore
          </button>

        </div>

      </div>

    </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">

            <h2 className="text-4xl font-bold text-cyan-400">
              500+
            </h2>

            <p className="mt-2 text-gray-300">
              Events
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">

            <h2 className="text-4xl font-bold text-pink-400">
              10K+
            </h2>

            <p className="mt-2 text-gray-300">
              Users
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">

            <h2 className="text-4xl font-bold text-green-400">
              100+
            </h2>

            <p className="mt-2 text-gray-300">
              Cities
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">

            <h2 className="text-4xl font-bold text-yellow-400">
              4.9★
            </h2>

            <p className="mt-2 text-gray-300">
              Rating
            </p>

          </div>

        </div>

      </section>

      {/* ================= EVENTS ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {filteredEvents.map((event) => (

            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer group bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-500"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={event.image}
                  alt={event.title}
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <span className="absolute top-4 left-4 bg-pink-600 px-3 py-1 rounded-full text-sm">
                  🔥 Trending
                </span>

                <span className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-lg px-3 py-1 rounded-full text-sm">
                  📅 {event.date}
                </span>

              </div>

              {/* Content */}

              <div className="p-6 text-black">

                <h2 className="text-2xl font-bold">
                  {event.title}
                </h2>

                <p className="text-gray-600 mt-3 line-clamp-3">
                  {event.description}
                </p>

                <div className="flex justify-between mt-5 text-gray-500">

                  <span>
                    📍 {event.location}
                  </span>

                  <span className="text-yellow-500">
                    {"⭐".repeat(event.rating)}
                  </span>

                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    bookEvent(event);
                  }}
                  className="mt-8 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl hover:scale-105 transition"
                >
                  Book Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>
            {/* ================= EVENT DETAILS MODAL ================= */}

      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4">

          <div className="relative bg-white text-black w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl max-h-[95vh] overflow-y-auto">

            {/* Close Button */}

            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 right-5 bg-red-500 text-white w-10 h-10 rounded-full hover:bg-red-600 transition z-10"
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

              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">

                <div>

                  <h1 className="text-4xl font-bold">
                    {selectedEvent.title}
                  </h1>

                  <p className="mt-3 text-gray-600">
                    📍 {selectedEvent.location}
                  </p>

                  <p className="text-gray-600">
                    📅 {selectedEvent.date}
                  </p>

                </div>

                {/* Rating */}

                <div className="text-center">

                  <p className="font-semibold mb-2">
                    Overall Rating
                  </p>

                  <div className="flex text-3xl justify-center">

                    {[1,2,3,4,5].map((star)=>(
                      <span
                        key={star}
                        className={
                          star<=selectedEvent.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                        }
                      >
                        ★
                      </span>
                    ))}

                  </div>

                  <p className="text-gray-500 mt-2">
                    {selectedEvent.rating}.0 / 5
                  </p>

                </div>

              </div>

              {/* Description */}

              <div className="mt-10">

                <h2 className="text-2xl font-bold mb-4">
                  About this Event
                </h2>

                <p className="leading-8 text-gray-700">
                  {selectedEvent.description}

                  <br /><br />

                  This event brings together professionals,
                  students and enthusiasts from across the
                  country. Participate in engaging sessions,
                  networking opportunities and exciting
                  activities designed to create memorable
                  experiences.
                </p>

              </div>

              {/* Comments */}

              <div className="mt-12">

                <h2 className="text-2xl font-bold">
                  Comments
                </h2>

                <div className="mt-6 space-y-4 max-h-60 overflow-y-auto">

                  {comments.length === 0 ? (

                    <div className="bg-gray-100 rounded-xl p-5 text-gray-500">
                      No comments yet.
                    </div>

                  ) : (

                    comments.map((item)=>(
                      <div
                        key={item.id}
                        className="bg-gray-100 rounded-xl p-5"
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
                  className="mt-8 w-full border rounded-xl p-4 h-36 resize-none outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <div className="flex flex-col md:flex-row gap-4 mt-6">

                  <button
                    onClick={postComment}
                    className="flex-1 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
                  >
                    💬 Post Comment
                  </button>

                  <button
                    onClick={()=>bookEvent(selectedEvent)}
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
            {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 bg-black/30 backdrop-blur-lg mt-20">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Brand */}

            <div>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                🎉 Eventify
              </h2>

              <p className="mt-5 text-gray-400 leading-7">
                Eventify helps you discover concerts,
                hackathons, workshops, startup meetups,
                gaming competitions and many more exciting
                events across India.
              </p>

            </div>

            {/* Explore */}

            <div>

              <h3 className="text-xl font-semibold mb-5">
                Explore
              </h3>

              <ul className="space-y-3 text-gray-400">

                <li>
                  <Link
                    to="/events"
                    className="hover:text-white transition"
                  >
                    Events
                  </Link>
                </li>

                <li>
                  <Link
                    to="/addevent"
                    className="hover:text-white transition"
                  >
                    Add Event
                  </Link>
                </li>

                <li>
                  <Link
                    to="/notifications"
                    className="hover:text-white transition"
                  >
                    Notifications
                  </Link>
                </li>

              </ul>

            </div>

            {/* Company */}

            <div>

              <h3 className="text-xl font-semibold mb-5">
                Company
              </h3>

              <ul className="space-y-3 text-gray-400">

                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/account"
                    className="hover:text-white transition"
                  >
                    Account
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-white transition"
                  >
                    Contact
                  </a>
                </li>

              </ul>

            </div>

            {/* Follow */}

            <div>

              <h3 className="text-xl font-semibold mb-5">
                Follow Us
              </h3>

              <div className="flex gap-4 text-3xl">

                <span className="cursor-pointer hover:scale-125 transition">
                  📘
                </span>

                <span className="cursor-pointer hover:scale-125 transition">
                  📷
                </span>

                <span className="cursor-pointer hover:scale-125 transition">
                  🐦
                </span>

                <span className="cursor-pointer hover:scale-125 transition">
                  💼
                </span>

              </div>

            </div>

          </div>

          {/* Bottom */}

          <div className="border-t border-white/10 mt-10 pt-8 text-center text-gray-500">

            © 2026 Eventify. All Rights Reserved.

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Afterlogin;