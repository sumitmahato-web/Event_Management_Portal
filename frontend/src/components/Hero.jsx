function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Discover Amazing Events
        </h1>

        <p className="text-xl mb-8">
          Book tickets for concerts, tech events,
          workshops and festivals.
        </p>

        <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold">
          Explore Events
        </button>
      </div>
    </section>
  );
}

export default Hero;