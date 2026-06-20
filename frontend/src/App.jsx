import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Afterlogin from "./pages/Afterlogin";
import Account from "./pages/Account";
import Notifications from "./pages/Notifications";
import About from "./pages/About";
import Events from "./pages/Events";
import AddEvent from "./pages/AddEvent";

const bookEvent = (event) => {
  const bookedEvents =
    JSON.parse(localStorage.getItem("bookedEvents")) || [];

  bookedEvents.push(event);

  localStorage.setItem(
    "bookedEvents",
    JSON.stringify(bookedEvents)
  );

  alert(`Successfully booked ${event.title} 🎉`);
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/afterlogin" element={<Afterlogin />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/addevent" element={<AddEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;