import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Bell, Plus, User } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/afterlogin" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
    { name: "Notifications", path: "/notifications", icon: <Bell size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/afterlogin" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <span className="text-white text-2xl">🎉</span>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Eventify
            </h1>
            <p className="text-xs text-slate-400 -mt-1">Discover Amazing Events</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative flex items-center gap-2 font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-cyan-300"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.icon}
              {link.name}

              {/* underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 to-pink-400 transition-all duration-300 ${
                  location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">

          {/* Add Event Button */}
          <Link
            to="/addevent"
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-2.5 rounded-full text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300"
          >
            <Plus size={18} />
            Add Event
          </Link>

          {/* Profile */}
          <Link
            to="/account"
            className="w-11 h-11 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <User size={20} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-xl hover:bg-white/10 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10 px-6 py-5 space-y-4 animate-in slide-in-from-top duration-300">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 text-lg font-medium transition ${
                location.pathname === link.path
                  ? "text-cyan-300"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          <Divider/>

          <Link
            to="/addevent"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-500 py-3 rounded-full text-white font-semibold shadow-lg"
          >
            <Plus size={18} />
            Add Event
          </Link>

          <Link
            to="/account"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 border border-white/20 py-3 rounded-full text-slate-200 hover:bg-white/10 transition"
          >
            <User size={18} />
            Account
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;