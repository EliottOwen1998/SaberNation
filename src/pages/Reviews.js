import React from "react";
import "../assets/styles/reviews.css";

const CustomerReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Luke Skywalker",
      review: "The craftsmanship of these lightsabers is unparalleled! It truly feels like wielding the power of the Force.",
      rating: 5,
    },
    {
      id: 2,
      name: "Darth Vader",
      review: "Impressive. Most impressive. These sabers are worthy of a Sith Lord.",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Leia Organa",
      review: "The design and detail are stunning. Saber Nation truly knows how to deliver a quality product.",
      rating: 5,
    },
  ];

  return (
    <main>
      <section className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="reviews-container">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <h3>{review.name}</h3>
              <p className="review-text">{review.review}</p>
              <p className="rating">Rating: {review.rating} ⭐</p>
            </div>
          ))}
        </div>
        <div className="add-review">
          <h3>Share Your Experience</h3>
          <form action="#" method="POST">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" rows="4" required></textarea>

            <label htmlFor="rating">Rating:</label>
            <select id="rating" name="rating" required>
              <option value="5">5 - Yippeee</option>
              <option value="4">4 - Gooood Anakin</option>
              <option value="3">3 - hmmm</option>
              <option value="2">2 - So uncivilized</option>
              <option value="1">1 - Poodoo</option>
            </select>

            <button type="submit">Submit Review</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CustomerReview;
