import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [reviews, setReviews] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  const navigate = useNavigate();

  const API_URL = "http://localhost:5000/api";

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin");
      return;
    }

    fetchReviews();
    fetchFeedbacks();
  };

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${API_URL}/reviews`);
      setReviews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFeedbacks = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${API_URL}/feedback`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFeedbacks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteReview = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${API_URL}/reviews/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setReviews(reviews.filter((review) => review._id !== id));
    } catch (error) {
      console.log(error);
      alert("Failed to delete review");
    }
  };

  const deleteFeedback = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${API_URL}/feedback/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFeedbacks(feedbacks.filter((feedback) => feedback._id !== id));
    } catch (error) {
      console.log(error);
      alert("Failed to delete feedback");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  const totalReviews = reviews.length;

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Admin Dashboard
            </h1>

            <p className="text-gray-500 mt-2">Manage Reviews & Feedbacks</p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl shadow-md transition"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-lg border">
            <h2 className="text-lg font-semibold text-gray-500">
              Total Reviews
            </h2>

            <p className="text-4xl font-bold text-orange-500 mt-3">
              {totalReviews}
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg border">
            <h2 className="text-lg font-semibold text-gray-500">
              Average Rating
            </h2>

            <p className="text-4xl font-bold text-orange-500 mt-3">
              ⭐ {averageRating}
            </p>
          </div>
        </div>
        {/* Reviews Section */}

        <div className="bg-white rounded-3xl shadow-lg border mt-10 p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Customer Reviews
          </h2>

          {reviews.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No Reviews Found 📭
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-[700px] w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="text-left py-4 px-3 font-semibold text-gray-700">
                      Customer
                    </th>

                    <th className="text-left py-4 px-3 font-semibold text-gray-700">
                      Product ID
                    </th>

                    <th className="text-left py-4 px-3 font-semibold text-gray-700">
                      Rating
                    </th>

                    <th className="text-left py-4 px-3 font-semibold text-gray-700">
                      Comment
                    </th>

                    <th className="text-left py-4 px-3 font-semibold text-gray-700">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {reviews.map((review) => (
                    <tr
                      key={review._id}
                      className="border-b hover:bg-orange-50 transition"
                    >
                      <td className="py-4 px-3">{review.customerName}</td>

                      <td className="py-4 px-3">{review.productId}</td>

                      <td className="py-4 px-3">
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                          ⭐ {review.rating}
                        </span>
                      </td>

                      <td className="py-4 px-3 max-w-xs">{review.comment}</td>

                      <td className="py-4 px-3">
                        <button
                          onClick={() => deleteReview(review._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition shadow-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Feedback Section */}

        <div className="bg-white rounded-3xl shadow-lg border mt-10 p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Customer Feedbacks
          </h2>

          {feedbacks.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No Feedback Found 📭
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-[600px] w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="text-left py-4 px-3 font-semibold text-gray-700">
                      Name
                    </th>

                    <th className="text-left py-4 px-3 font-semibold text-gray-700">
                      Mobile
                    </th>

                    <th className="text-left py-4 px-3 font-semibold text-gray-700">
                      Message
                    </th>

                    <th className="text-left py-4 px-3 font-semibold text-gray-700">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {feedbacks.map((feedback) => (
                    <tr
                      key={feedback._id}
                      className="border-b hover:bg-orange-50 transition"
                    >
                      <td className="py-4 px-3">{feedback.name}</td>

                      <td className="py-4 px-3">{feedback.mobile}</td>

                      <td className="py-4 px-3">{feedback.message}</td>

                      <td className="py-4 px-3">
                        <button
                          onClick={() => deleteFeedback(feedback._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition shadow-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
