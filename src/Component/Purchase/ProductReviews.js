import React, { useState } from "react";
// import Alert from "../../hooks/Alert";

// import RatingStars from './../../Dashboard/MyReview/RatingsStar';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { toast } from "react-toastify";
import UploadImage from "../../hooks/UploadImage";
import { Rating } from "@mui/material";
import Reviews from "./../Reviews/Reviews";

const ProductReviews = ({ toolId }) => {
  const [user] = useAuthState(auth);
  const [value, setValue] = useState(5);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const { uploadImage } = UploadImage();
  const [reviewDone, setReviewDone] = useState(false);

  const handleReview = (e) => {
    e.preventDefault();
    fetch("https://handyman-server.onrender.com/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        toolId: toolId,
        avatar: user?.photoURL,
        name: user?.displayName,
        email: user?.email,
        message: message,
        rates: value,
        image: image,
      }),
    })
      .then((res) => {
        e.target.reset();
        res.json();
        toast.success("Review added");
        // setUpdateId(Math.random() * 1000);
        setReviewDone(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Reviews reviewDone={reviewDone} toolId={toolId} />
      <div className="container lg:px-12">
        <form
          onSubmit={handleReview}
          className="max-w-full w-3/3 md:w-5/6 lg:w-3/6 p-5 text-left"
        >
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              event.preventDefault();
            }}
          />

          <label
            className="block text-sm font-bold mb-2 text-left mt-4"
            htmlFor="review"
          >
            Review
          </label>
          <textarea
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            id="review"
            type="text"
            placeholder="Enter Your Message"
            required
            rows="5"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {image ? (
            <div className="border rounded w-20 relative mt-4">
              <img src={image} alt="Review" />
              <i
                className="fas fa-times-circle absolute top-0 right-0 -mt-2 -mr-2 cursor-pointer"
                onClick={() => setImage("")}
              ></i>
            </div>
          ) : (
            <div
              className="mt-4 rounded bg-gray-50 p-2 w-20 h-16 border cursor-pointer hover:bg-gray-100 text-gray-500"
              onClick={() => {
                document.getElementById("review-photo").click();
              }}
            >
              <div className="border-dashed border-2 rounded border-gray-500 w-full h-full flex items-center justify-center text-xl">
                <i className="fas fa-camera"></i>
                <input
                  type="file"
                  name="photo"
                  id="review-photo"
                  className="hidden"
                  onChange={(e) => {
                    uploadImage(e.target.files[0], setImage);
                  }}
                />
              </div>
            </div>
          )}
          <button
            className="mt-4 py-2 px-8 rounded-full text-indigo-400 transition-all duration-150 focus:shadow-outline border border-indigo-400 hover:bg-indigo-400 hover:text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductReviews;
