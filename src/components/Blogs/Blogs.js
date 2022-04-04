import React from "react";

const Blogs = () => {
  return (
    <div className=" mt-20 w-4/5 m-auto">
      <div className="border-solid border-2 border-indigo-600 rounded-lg p-5 mb-5">
        <h2 className="text-2xl font-bold">What is Contex API?</h2>
        <p className="text-xl font-semibold">Ans: We used context api when we need to a data access from different component. we can do it using props also but it's very complex process it's call props drilling. For easily maintain data passing we use context api.</p>
      </div>
      <div className="border-solid border-2 border-indigo-600  rounded-lg p-5 mb-5">
        <h2 className="text-2xl font-bold">What is Semantic tag?</h2>
        <p className="text-xl font-semibold">Ans: Semantic tag also a html tag. which is more meaningful to user and browser also. what the section or element do semantic tag can specify this with his tag. some semantic tag is: nav, header, footer, article, section etc. </p>
      </div>
      <div className="border-solid border-2 border-indigo-600  rounded-lg p-5 mb-5">
        <h2 className="text-2xl font-bold">What is Inline, Block, Inline-block?</h2>
        <p className="text-xl font-semibold">Ans: An inline element does not start on a new line and only takes up as much width as necessary. <br /> Block element start new line and it has built in margin or white space. <br /> An inline-block element is placed as an inline element (on the same line as adjacent content), but it behaves as a block element. </p>
      </div>
    </div>
  );
};

export default Blogs;
