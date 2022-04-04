import useReviews from "../Hook/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  console.log(reviews);
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-10 w-4/5 m-auto">
      {reviews.map((review) => (
        <Review key={review._id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
