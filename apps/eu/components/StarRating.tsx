import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number | "sm" | "lg";
  showNumber?: boolean;
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = 16,
  showNumber = true,
}: StarRatingProps) {
  // Map string sizes to numbers
  const sizeMap = {
    sm: 14,
    lg: 20,
  };
  const actualSize = typeof size === "number" ? size : sizeMap[size] || 16;

  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    const isFilled = i <= Math.round(rating);
    stars.push(
      <Star
        key={i}
        className={`${isFilled ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        style={{ width: actualSize, height: actualSize }}
      />
    );
  }

  return (
    <div className="flex items-center gap-1">
      {stars}
      {showNumber && (
        <span className="ml-1 text-sm font-semibold text-gray-700">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
