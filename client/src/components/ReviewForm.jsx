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
    <div className="bg-white shadow-lg p-6 rounded-xl mt-10">

      <h2 className="text-2xl font-bold mb-4">
        Leave a Review/contact
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-3 rounded mb-4"
      />

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="w-full border p-3 rounded mb-4"
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

      <textarea
        placeholder="Write your review..."
        rows="4"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full border p-3 rounded mb-4"
      />

      <button
        onClick={addReview}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Submit Review
      </button>

    </div>
  );
}

export default ReviewForm;