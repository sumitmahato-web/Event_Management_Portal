import { useState } from "react";

function AddEvent() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    image: "",
    date: "",
    rating: 5,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const events =
      JSON.parse(localStorage.getItem("events")) || [];

    const newEvent = {
      id: Date.now(),
      ...formData,
    };

    events.push(newEvent);

    localStorage.setItem(
      "events",
      JSON.stringify(events)
    );

    alert("🎉 Event Added Successfully!");

    setFormData({
      title: "",
      description: "",
      location: "",
      image: "",
      date: "",
      rating: 5,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black flex justify-center items-center px-4 py-10 overflow-x-hidden">

      {/* Background */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/30 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <div className="relative z-10 w-full max-w-4xl">

        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-8">

            <h1 className="text-4xl font-black text-center text-white">
              ➕ Add New Event
            </h1>

            <p className="text-center text-indigo-100 mt-2">
              Create and publish your next amazing event
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10 p-8">

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="title"
                placeholder="🎉 Event Title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white text-black outline-none"
              />

              <textarea
                name="description"
                placeholder="📝 Event Description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-4 rounded-xl bg-white text-black outline-none resize-none"
              />

              <input
                type="text"
                name="location"
                placeholder="📍 Event Location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white text-black outline-none"
              />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white text-black outline-none"
              />

              <input
                type="text"
                name="image"
                placeholder="🖼️ Image URL"
                value={formData.image}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white text-black outline-none"
              />

              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white text-black outline-none"
              >
                <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                <option value="4">⭐⭐⭐⭐ (4)</option>
                <option value="3">⭐⭐⭐ (3)</option>
                <option value="2">⭐⭐ (2)</option>
                <option value="1">⭐ (1)</option>
              </select>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:scale-105 transition"
              >
                🚀 Publish Event
              </button>

            </form>

            {/* Preview */}

            <div>

              <h2 className="text-2xl font-bold text-white mb-6">
                Live Preview
              </h2>

              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">

                {formData.image ? (
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image Selected
                  </div>
                )}

                <div className="p-6 text-black">

                  <h3 className="text-2xl font-bold">
                    {formData.title || "Event Title"}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {formData.description ||
                      "Event description will appear here..."}
                  </p>

                  <div className="mt-5 space-y-2 text-gray-500">

                    <p>
                      📍 {formData.location || "Location"}
                    </p>

                    <p>
                      📅 {formData.date || "Date"}
                    </p>

                  </div>

                  <div className="flex mt-5 text-yellow-400 text-xl">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>
                        {star <= formData.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddEvent;