function Rating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-2xl ${
            star <= rating
              ? "text-yellow-400"
              : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))

      }

      <span className="ml-2 text-gray-600 font-semibold">
        {rating}/5
      </span>
    </div>
  );
}

export default Rating;