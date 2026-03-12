import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import RatingBtn from "./Button";

type RatingProps = {
  heading?: string;
  color?: string;
  feedbackMessages?: string[];
};

export default function Rating({
  heading = "Rate your experience",
  color = "gold",
  feedbackMessages = ["terrible", "Poor", "Fair", "Good", "Excellent"],
}: RatingProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  //Close modal and reset UI
  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            ratingClick={setRating}
            hoverEnter={setHover}
            hoverLeave={() => setHover(null)}
          />
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
      <RatingBtn
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </RatingBtn>
      <Modal isOpen={submitted} onClose={closeModal} rating={rating}></Modal>
    </div>
  );
}
