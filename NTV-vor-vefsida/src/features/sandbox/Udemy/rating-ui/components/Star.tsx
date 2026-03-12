type StarProps = {
  star: number;
  rating: number;
  hover: number | null;
  color: string;
  ratingClick: (val: number) => void;
  hoverEnter: (val: number) => void;
  hoverLeave: () => void;
};

export default function Star({
  star,
  rating,
  hover,
  color,
  ratingClick,
  hoverEnter,
  hoverLeave,
}: StarProps) {
  return (
    <span
      onClick={() => ratingClick(star)}
      onMouseEnter={() => hoverEnter(star)}
      onMouseLeave={hoverLeave}
      className="star"
      style={{ color: star <= (hover || rating) ? color : "#ccc" }}
    >
      {"\u2605"}
    </span>
  );
}
