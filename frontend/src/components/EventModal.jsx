import { useState, useEffect } from "react";
import Rating from "./Rating";

function EventModal({ event, onClose, bookEvent }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!event) return;

    const saved =
      JSON.parse(localStorage.getItem(`comments-${event.id}`)) || [];

    setComments(saved);
  }, [event]);

  if (!event) return null;

  const addComment = () => {
    if (comment.trim() === "") return;

    const newComment = {
      id: Date.now(),
      user: "Guest",
      text: comment,
    };

    const updated = [...comments, newComment];

    setComments(updated);

    localStorage.setItem(
      `comments-${event.id}`,
      JSON.stringify(updated)
    );

    setComment("");
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-5">

      <div className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-fade">

        <img
          src={event.image}
          alt={event.title}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">

          <div className="flex justify-between items-start">

            <div>

              <h1 className="text-4xl font-bold">
                {event.title}
              </h1>

              <p className="text-gray-500 mt-2">
                📍 {event.location}
              </p>

              <p className="text-gray-500">
                📅 {event.date}
              </p>

            </div>

            <Rating rating={4} />

          </div>

          <p className="mt-8 text-gray-700 leading-7">
            {event.description}
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold">
            Comments
          </h2>

          <div className="space-y-4 mt-5 max-h-56 overflow-y-auto">

            {comments.length === 0 ? (
              <p className="text-gray-500">
                No comments yet.
              </p>
            ) : (
              comments.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 rounded-xl p-4"
                >
                  <h3 className="font-bold">
                    {item.user}
                  </h3>

                  <p>{item.text}</p>
                </div>
              ))
            )}

          </div>

          <textarea
            placeholder="Write your comment..."
            className="border mt-6 w-full rounded-xl p-4 h-32 resize-none"
            value={comment}
            onChange={(e) =>
              setComment(e.target.value)
            }
          />

          <div className="flex gap-4 mt-6">

            <button
              onClick={addComment}
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700"
            >
              Post Comment
            </button>

            <button
              onClick={() => bookEvent(event)}
              className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700"
            >
              Book Event
            </button>

            <button
              onClick={onClose}
              className="border px-8 py-3 rounded-xl"
            >
              Close
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EventModal;