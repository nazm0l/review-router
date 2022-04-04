import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useReviews from "../Hook/useReviews";
import NewReview from "../NewReview/NewReview";

const Home = () => {

  const [reviews, setReviews] = useReviews();
  const newReview = reviews.slice(0, 3);
  return (
    <>
      <Header></Header>
      <h2 className="text-3xl text-center font-bold mt-5">User Reviews(3)</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-10 p-10">
        {newReview.map((review) => (
          <NewReview key={review._id} review={review}></NewReview>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/reviews">
          <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mt-5">
            Sell all reviews
          </button>
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
