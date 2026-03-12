type modalProps = {
  rating: number;
  isOpen: boolean;
  onClose: () => void;
};
import RatingBtn from "./Button";

export default function Modal({ isOpen, onClose, rating }: modalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank You</h2>
        <p>
          You rated us {rating} star{rating > 1 ? "s" : ""}
        </p>
        <RatingBtn className="close-btn" onClick={onClose}>
          Close
        </RatingBtn>
      </div>
    </div>
  );
}
