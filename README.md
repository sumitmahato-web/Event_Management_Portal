🎉 Eventify — Event Management Portal

Eventify is a full-stack Event Management Portal that allows users to discover upcoming events, create an account, log in, browse events, book events, and manage their bookings.

The project is built using React.js, Vite, Tailwind CSS, Node.js, Express.js, and MongoDB.

---

📌 Project Overview

Eventify provides a simple and user-friendly platform for discovering and booking events such as:

- 💻 Technology Conferences
- 🎵 Music Festivals
- 🚀 Startup Meetups
- 🎓 Workshops
- 🎤 Other Events

Users can create an account, log in, explore available events, book events, and view their booking notifications.

---

✨ Features

👤 User Authentication

- User Registration / Sign Up
- User Login
- MongoDB-based user storage
- Duplicate email checking
- Login validation

🎫 Event Management

- Browse upcoming events
- Search events by title
- View event details
- Add new events
- Event location and date information
- Event image support

📅 Event Booking

- Book an event
- Prevent duplicate booking
- Store booked events in browser local storage
- View booking confirmations

🔔 Notifications

- Booking confirmation notifications
- Display number of booked events
- View booked event details

👤 Account

- User account page
- View account information
- View booked events
- Cancel bookings
- Logout functionality

🎨 UI

- Responsive design
- Modern card-based interface
- Tailwind CSS styling
- Gradient hero sections
- Responsive navigation
- Interactive buttons and forms

---

🛠️ Tech Stack

Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- JavaScript (ES6+)

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

Storage

- MongoDB — User authentication data
- Browser LocalStorage — Events and booking data

---

📂 Project Structure

Event_Management_Portal/
│
├── backend/
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   └── authRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   └── data/
│   │   │       └── data.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Afterlogin.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── AddEvent.jsx
│   │   │   ├── Account.jsx
│   │   │   ├── Notifications.jsx
│   │   │   └── About.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md

---

🚀 Installation & Setup

1. Clone the Repository

git clone <your-repository-url>
cd Event_Management_Portal

---

2. Setup Backend

Navigate to the backend directory:

cd backend

Install dependencies:

npm install

Create a ".env" file:

MONGO_URI=your_mongodb_connection_string
PORT=5000

«Never upload your real MongoDB credentials or ".env" file to a public GitHub repository.»

Start the backend server:

npm start

For development with Nodemon:

npm run dev

The backend will run on:

http://localhost:5000

---

3. Setup Frontend

Open another terminal and navigate to the frontend:

cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev

Vite will provide a local URL similar to:

http://localhost:5173

Open the URL in your browser.

---

🔌 API Endpoints

Authentication

Register User

POST /api/auth/signup

Request body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

---

Login User

POST /api/auth/login

Request body:

{
  "email": "john@example.com",
  "password": "password123"
}

---

🗄️ Database

Eventify uses MongoDB with Mongoose.

The User model contains:

Field| Type| Description
"name"| String| User's full name
"email"| String| User email
"password"| String| User password
"createdAt"| Date| Account creation time
"updatedAt"| Date| Last update time

---

💾 LocalStorage

The frontend currently uses browser LocalStorage for some application data.

"user"

Stores the logged-in user's information.

"bookedEvents"

Stores events booked by the user.

"events"

Stores events created through the Add Event page.

---

🧭 Application Flow

                ┌──────────────┐
                │     Home     │
                └──────┬───────┘
                       │
              ┌────────┴────────┐
              │                 │
           Sign Up             Login
              │                 │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │   Dashboard     │
              └────────┬────────┘
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
       Events       Add Event    Account
          │
          ▼
      Book Event
          │
          ▼
    Booking Saved
          │
          ▼
    Notifications

---

📄 Main Pages

Page| Purpose
Home| Landing page
Login| Existing user authentication
Signup| New user registration
After Login| User dashboard and upcoming events
Events| Browse and search events
Add Event| Create a new event
Account| Manage account and bookings
Notifications| View booking confirmations
About| Information about Eventify

---

🔐 Security Note

This project is currently intended for educational/project demonstration purposes.

For production deployment, authentication should be improved by implementing:

- Password hashing using bcrypt
- JWT-based authentication
- Protected routes
- HTTP-only cookies
- Input validation
- Rate limiting
- Secure environment variables
- Proper authorization
- HTTPS

---

🔮 Future Improvements

Some possible improvements for future versions:

- [ ] JWT authentication
- [ ] Password hashing
- [ ] Admin dashboard
- [ ] Full CRUD event management
- [ ] Event categories
- [ ] Event filtering
- [ ] Date-based event search
- [ ] Online payment integration
- [ ] Email booking confirmation
- [ ] Image upload functionality
- [ ] User profile editing
- [ ] Real-time notifications
- [ ] Event reviews and ratings
- [ ] Deployment with a production database
- [ ] Mobile-friendly improvements

---

🎯 Learning Objectives

This project demonstrates practical implementation of:

- React component development
- React state management
- React Router
- REST API communication
- Axios
- Node.js backend development
- Express.js routing
- MongoDB database integration
- Mongoose models
- Authentication fundamentals
- LocalStorage
- Responsive UI design
- Tailwind CSS
- Full-stack project structure

---

👨‍💻 Developer

Candidate Name: Sumit Mahato

Intern ID: CITS1750

---

📜 License

This project is created for educational and internship/project purposes.

---

⭐ Acknowledgement

Built with ❤️ using React, Node.js, Express, MongoDB and Tailwind CSS.

If you find this project useful, consider giving the repository a ⭐.