import { useState } from "react";

function AddEvent() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingEvents =
      JSON.parse(localStorage.getItem("events")) || [];

    const newEvent = {
      id: existingEvents.length + 1,
      title: formData.title,
      description: formData.description,
      location: formData.location,
      image: formData.image,
      date: new Date().toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      ),
    };

    existingEvents.push(newEvent);

    localStorage.setItem(
      "events",
      JSON.stringify(existingEvents)
    );

    alert("Event Added Successfully 🎉");

    setFormData({
      title: "",
      description: "",
      location: "",
      image: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-8">
          ➕ Add Event
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

          <textarea
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl h-28"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;