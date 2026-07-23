function About() {
  const features = [
    {
      icon: "🎟️",
      title: "Easy Booking",
      desc: "Book your favorite events in just one click with a smooth booking experience.",
    },
    {
      icon: "🔔",
      title: "Real-Time Updates",
      desc: "Get instant notifications about upcoming events and booking confirmations.",
    },
    {
      icon: "⭐",
      title: "Ratings & Reviews",
      desc: "Rate events and read reviews from other attendees before booking.",
    },
    {
      icon: "💬",
      title: "Community",
      desc: "Share your experience through comments and connect with other participants.",
    },
    {
      icon: "📍",
      title: "Discover Events",
      desc: "Find concerts, workshops, hackathons, startup meetups and festivals nearby.",
    },
    {
      icon: "👤",
      title: "Personal Dashboard",
      desc: "Manage all your bookings, favorite events and account in one place.",
    },
  ];

  const stats = [
    { value: "500+", label: "Events" },
    { value: "10K+", label: "Users" },
    { value: "100+", label: "Cities" },
    { value: "4.9★", label: "Rating" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white overflow-x-hidden">

      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/30 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-[180px] rounded-full"></div>

      {/* Hero */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">

        <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg">
          🚀 About Eventify
        </span>

        <h1 className="text-5xl md:text-7xl font-black mt-8">

          Connecting People With

          <span className="block bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">

            Amazing Events

          </span>

        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-300 leading-8">

          Eventify is a modern event management platform
          designed to help people discover, explore and
          book amazing events with a beautiful and
          seamless experience.

        </p>

      </section>

      {/* Stats */}

      <section className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:scale-105 transition"
            >

              <h2 className="text-4xl font-bold text-cyan-400">
                {item.value}
              </h2>

              <p className="mt-3 text-gray-300">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* About */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200"
              alt="Event"
              className="rounded-3xl shadow-2xl"
            />

          </div>

          <div>

            <h2 className="text-4xl font-bold">

              Who We Are

            </h2>

            <p className="mt-8 text-gray-300 leading-8">

              Eventify is an all-in-one event management
              platform where users can discover concerts,
              workshops, startup meetups, hackathons,
              festivals and conferences.

              <br /><br />

              Our goal is to create unforgettable
              experiences by connecting organizers with
              attendees through a fast, secure and modern
              platform.

            </p>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold text-center mb-14">

          Why Choose Eventify?

        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {feature.title}

              </h3>

              <p className="mt-4 text-gray-300 leading-7">

                {feature.desc}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Mission */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">

          <h2 className="text-4xl font-bold">

            Our Mission

          </h2>

          <p className="mt-8 text-lg leading-8 max-w-3xl mx-auto">

            We believe everyone deserves access to
            incredible experiences. Our mission is to
            simplify event discovery and make booking
            effortless through innovation, technology
            and a user-friendly interface.

          </p>

        </div>

      </section>

      {/* Contact */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-12">

          <h2 className="text-4xl font-bold mb-10 text-center">

            Contact Us

          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div className="bg-white/5 rounded-2xl p-8">

              <div className="text-4xl mb-4">
                📧
              </div>

              <h3 className="font-bold text-xl">

                Email

              </h3>

              <p className="mt-3 text-gray-300">

                support@eventify.com

              </p>

            </div>

            <div className="bg-white/5 rounded-2xl p-8">

              <div className="text-4xl mb-4">
                📞
              </div>

              <h3 className="font-bold text-xl">

                Phone

              </h3>

              <p className="mt-3 text-gray-300">

                +91 9876543210

              </p>

            </div>

            <div className="bg-white/5 rounded-2xl p-8">

              <div className="text-4xl mb-4">
                📍
              </div>

              <h3 className="font-bold text-xl">

                Address

              </h3>

              <p className="mt-3 text-gray-300">

                Bangalore, India

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-white/10 py-8 text-center text-gray-400">

        © 2026 Eventify. All Rights Reserved.

      </footer>

    </div>
  );
}

export default About;