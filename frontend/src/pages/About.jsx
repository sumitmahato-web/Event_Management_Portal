function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">
            About Eventify 🎉
          </h1>

          <p className="text-xl">
            Connecting people with unforgettable events.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-3xl font-bold mb-6">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-8">
            Eventify is a modern event management platform
            that helps users discover, book, and manage
            events easily. Whether it's a tech conference,
            music festival, startup meetup, workshop, or
            cultural event, Eventify provides a seamless
            booking experience.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-6">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-8">
            Our mission is to make event discovery simple,
            accessible, and enjoyable for everyone. We aim
            to connect organizers with attendees through an
            easy-to-use platform.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-6">
            Features
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">
                🎟 Event Booking
              </h3>

              <p className="text-gray-600">
                Book your favorite events instantly.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">
                🔔 Notifications
              </h3>

              <p className="text-gray-600">
                Stay updated about your bookings.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">
                👤 User Profile
              </h3>

              <p className="text-gray-600">
                Manage all your bookings in one place.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-6">
            Contact Us
          </h2>

          <div className="bg-indigo-50 p-6 rounded-2xl">
            <p className="mb-2">
              📧 Email: support@eventify.com
            </p>

            <p className="mb-2">
              📞 Phone: +91 9876543210
            </p>

            <p>
              📍 Location: Bangalore, India
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;