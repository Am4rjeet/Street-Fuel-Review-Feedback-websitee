import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { products } from "../data/product";
import ReviewForm from "../components/ReviewForm";

function ProductPage() {
  const { id } = useParams();

  const API_URL = "http://localhost:5000/api";

  const product = products.find((item) => item.id === Number(id));

  const [reviews, setReviews] = useState([]);

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchReviews();
  }, [id]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${API_URL}/reviews/${id}`);

      setReviews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addReview = async () => {
    if (!name.trim() || !comment.trim() || !rating) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post(`${API_URL}/reviews`, {
        productId: id,
        customerName: name,
        rating: Number(rating),
        comment,
      });

      setName("");
      setRating("");
      setComment("");

      fetchReviews();
    } catch (error) {
      console.log(error);
      alert("Failed to submit review");
    }
  };

  if (!product) {
    return <h1 className="text-center text-3xl mt-20">Product Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[250px] md:h-[500px] object-cover"
          />

          <div className="p-6 md:p-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              {product.name}
            </h1>

            <p className="text-gray-600 mt-5 text-lg leading-8">
              {product.description}
            </p>

            <div className="mt-6 inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold">
              📝 {reviews.length} Reviews
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Customer Reviews
          </h2>
          {reviews.length === 0 ? (
            <div className="bg-white shadow-lg rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800">
                No Reviews Yet
              </h3>

              <p className="text-gray-500 mt-3">
                Be the first customer to share your experience.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {reviews.map((review) => (
                <div
                  key={review._id}
                  className="bg-white shadow-lg rounded-3xl p-6 border border-gray-100 hover:shadow-xl transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h3 className="font-bold text-lg text-gray-900">
                      {review.customerName}
                    </h3>

                    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold w-fit">
                      ⭐ {review.rating}/5
                    </span>
                  </div>

                  <p className="text-gray-700 mt-4 leading-7">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 bg-white rounded-3xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Write a Review
          </h2>

          <ReviewForm
            name={name}
            setName={setName}
            rating={rating}
            setRating={setRating}
            comment={comment}
            setComment={setComment}
            addReview={addReview}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
