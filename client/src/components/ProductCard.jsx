import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={item.image}
        alt={item.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {item.name}
        </h2>

        <p className="text-gray-600 mt-2">
          {item.description}
        </p>

        <div className="mt-3 font-semibold">
          ⭐ {item.rating || 0}
        </div>

        <div className="text-sm text-gray-500">
          {item.reviewCount || 0} Reviews
        </div>

        <Link to={`/product/${item.id}`}>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
            View Reviews
          </button>
        </Link>

      </div>
    </div>
  );
}

export default ProductCard;