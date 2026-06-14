import { useState } from "react";
import axios from "axios";

function FeedbackPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/feedback", {
        name,
        mobile,
        message,
      });

      alert("Feedback Submitted");

      setName("");
      setMobile("");
      setMessage("");
    } catch (error) {
      console.log(error);
      alert("Failed to submit feedback");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Feedback & Contact
          </h1>

          <p className="text-gray-500 text-lg">
            We'd love to hear your experience with Street Fuel 🍔
          </p>
        </div>

        {/* Contact Section */}

        <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Contact Information
          </h2>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              Street Fuel
            </p>

            <p className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              +91 7688839162
            </p>

            <p className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              ngangwal754@gmail.com
            </p>
          </div>
        </div>

        {/* Feedback Form */}

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Share Your Feedback
          </h2>
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Mobile Number
              </label>

              <input
                type="text"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Feedback Message
            </label>

            <textarea
              rows="5"
              placeholder="Write your feedback here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-md hover:shadow-lg"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackPage;
