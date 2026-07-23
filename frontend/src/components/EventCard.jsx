import { CalendarDays, MapPin, Star, Ticket } from "lucide-react";

function EventCard({ event, onClick }) {
  return (
    <div
      onClick={() => onClick(event)}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-cyan-500/20"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Rating */}
        <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm text-yellow-400 backdrop-blur">
          <Star size={15} fill="currentColor" />
          {event.rating}
        </div>

        {/* Tickets */}
        <div className="absolute top-4 right-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
          {event.tickets} Tickets Left
        </div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Bottom Text */}
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-2xl font-bold text-white">
            {event.title}
          </h2>

          <p className="mt-1 text-sm text-gray-300 line-clamp-2">
            {event.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6 text-white">
        <div className="flex items-center gap-2 text-gray-400">
          <CalendarDays size={18} className="text-cyan-400" />
          <span>{event.date}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <MapPin size={18} className="text-pink-400" />
          <span>{event.location}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Starting From</p>
            <h3 className="text-2xl font-bold text-green-400">
              ₹{event.price || 499}
            </h3>
          </div>

          <div className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300">
            Premium
          </div>
        </div>

        {/* Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick(event);
          }}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-3 font-semibold text-white transition duration-300 hover:scale-105"
        >
          <Ticket size={18} />
          View Details
        </button>
      </div>
    </div>
  );
}

export default EventCard;