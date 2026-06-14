function ReviewForm({
  name,
  setName,
  rating,
  setRating,
  comment,
  setComment,
  addReview,
}) {
  return (
    <div className="bg-white">

      <div className="grid md:grid-cols-2 gap-5 mb-5">

        <div>

          <label className="block text-gray-700 font-medium mb-2">
            Your Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
          />

        </div>

        <div>

          <label className="block text-gray-700 font-medium mb-2">
            Rating
          </label>

          <select
            value={rating}
            onChange={(e) =>
              setRating(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
          >

            <option value="">
              Select Rating
            </option>

            <option value="5">
              ⭐⭐⭐⭐⭐ (5)
            </option>

            <option value="4">
              ⭐⭐⭐⭐ (4)
            </option>

            <option value="3">
              ⭐⭐⭐ (3)
            </option>

            <option value="2">
              ⭐⭐ (2)
            </option>

            <option value="1">
              ⭐ (1)
            </option>

          </select>

        </div>

      </div>

      <div className="mb-6">

        <label className="block text-gray-700 font-medium mb-2">
          Review
        </label>

        <textarea
          placeholder="Share your experience..."
          value={comment}
          onChange={(e) =>
            setComment(e.target.value)
          }
          rows="5"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
        />

      </div>

      <button
        onClick={addReview}
        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition shadow-md hover:shadow-lg"
      >
        Submit Review
      </button>

    </div>
  );
}

export default ReviewForm;