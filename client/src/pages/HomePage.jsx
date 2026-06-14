import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/product";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [productsWithReviews, setProductsWithReviews] =
    useState(products);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/reviews"
      );

      const reviews = res.data;

      const updatedProducts = products.map(
        (product) => {
          const productReviews = reviews.filter(
            (review) =>
              review.productId ===
              String(product.id)
          );

          const reviewCount =
            productReviews.length;

          const averageRating =
            reviewCount > 0
              ? (
                  productReviews.reduce(
                    (sum, review) =>
                      sum + review.rating,
                    0
                  ) / reviewCount
                ).toFixed(1)
              : 0;

          return {
            ...product,
            reviewCount,
            rating: averageRating,
          };
        }
      );

      setProductsWithReviews(
        updatedProducts
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-black via-gray-900 to-orange-900 text-white py-24 md:py-32">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="max-w-3xl mx-auto">

            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🔥 Street Food Experience
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
              Street Fuel
            </h1>

            <p className="mt-6 text-xl md:text-2xl font-medium">
              Fuel Your Hunger 🔥
            </p>

            <p className="mt-4 text-gray-300 text-lg">
              Delicious Burgers, Crispy Fries,
              Cold Coffee & Tasty Sandwiches
            </p>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">

        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Customer Favorites
          </h2>

          <p className="text-gray-500 mt-3 text-lg">
            Most loved items by our customers ❤️
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {productsWithReviews.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </section>

      <section className="bg-orange-50 py-16">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Street Fuel?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">

              <div className="text-5xl mb-4">
                🍔
              </div>

              <h3 className="text-xl font-bold mb-3">
                Fresh Ingredients
              </h3>

              <p className="text-gray-600">
                Prepared using quality ingredients
                for the best taste experience.
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">

              <div className="text-5xl mb-4">
                ⚡
              </div>

              <h3 className="text-xl font-bold mb-3">
                Fast Service
              </h3>

              <p className="text-gray-600">
                Quick preparation and excellent
                customer service every day.
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">

              <div className="text-5xl mb-4">
                ⭐
              </div>

              <h3 className="text-xl font-bold mb-3">
                Customer Satisfaction
              </h3>

              <p className="text-gray-600">
                Real reviews and feedback help us
                improve continuously.
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default HomePage;