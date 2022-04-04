import React from "react";

const NewReview = (props) => {

    const {picture, name, text, rating} = props.review

  return (
    <div>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover mt-5 md:mt-0 w-20 h-20 rounded-full md:h-20 md:w-20 md:rounded-full md:ml-4"
          src={picture}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {text}
          </p>
          <p className="font-bold">
            <small>Ratings: {rating}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewReview;
