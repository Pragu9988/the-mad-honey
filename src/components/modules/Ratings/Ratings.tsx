import { Star, StarHalf } from "lucide-react";

type TProps = {
  value: number;
};

const Ratings = ({ value }: TProps) => {
  // You can customize the number of total stars as per your requirement
  const totalStars = 5;

  // Round the rating value to the nearest half
  const roundedValue = Math.round(value * 2) / 2;

  // Create an array of star elements based on the rating value
  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    if (i <= roundedValue) {
      // Render a filled star
      stars.push(<Star key={i} color="gold" />);
    } else if (i - 0.5 === roundedValue) {
      // Render a half-filled star
      stars.push(<StarHalf key={i} color="gold" />);
    }
  }

  return <div className="flex mt-2">{stars}</div>;
};

export default Ratings;
