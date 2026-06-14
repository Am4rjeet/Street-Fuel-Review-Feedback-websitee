import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto p-8 text-center">

        <h2 className="text-3xl font-bold">
          Street Fuel 🍔
        </h2>

        <p className="mt-3 text-gray-400">
          Burgers • Sandwiches • Cold Coffee • Fries
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Owned & Managed by Nitin Gangwal
        </p>

        <p className="mt-2 text-sm text-gray-500">
          © 2026 Street Fuel
        </p>

        <a
          href="https://instagram.com/street_fuel__rj14"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center mt-6 text-pink-500 hover:text-pink-400 transition"
        >
          <FaInstagram size={40} />

          <span className="mt-2 text-white">
            Follow us on Instagram
          </span>
        </a>

      </div>
    </footer>
  );
}

export default Footer;