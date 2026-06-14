import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Street Fuel 🍔
        </Link>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>

          <Link to="/about" className="hover:text-yellow-400">
            About
          </Link>

          <Link to="/feedback" className="hover:text-yellow-400"> 
          Feedback
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
