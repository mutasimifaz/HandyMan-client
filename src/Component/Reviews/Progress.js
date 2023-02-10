import React from "react";
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


const Row = ({ yellowStars }) => {
  return Array.from({ length: 5 }, (v, i) => i).map((rate) => {
    return (
      <>
      <StarIcon className={`fa-solid fa-star mr-1 ${
          yellowStars >= rate ? "text-yellow-400" : "text-gray-300"
        }`}/>

      </>
    );
  });
};

const Progress = ({ reviews }) => {
  const avgRate =
    reviews?.map((rate) => rate.rates).reduce((a, b) => a + b, 0) /
      reviews.length || 0;

  return (
    <div className="container px-12">
      <div className="flex gap-2">
      
      <Rating className="text-yellow-300" name="half-rating" value={avgRate.toFixed(1)} readOnly={true} precision={0.5} />
      <h1 className="text-xl">({avgRate.toFixed(1)}/5)</h1>
    </div>
    <h1 className="text-xl">{reviews.length || 0} Reviews</h1>
    <div>
    <div className="mt-5 md:mt-0 w-full md:w-auto">
          {Array.from({ length: 5 }, (v, i) => i).map((rate, index) => {
            return (
              <div key={rate} className="flex items-center space-x-5">
                <div>
                  <Row yellowStars={index}></Row>
                </div>
                <h1>
                  ( {reviews?.filter((r) => r.rates === index + 1).length || 0}{" "}
                  )
                </h1>
              </div>
            );
          })}
        </div>
    </div>
    </div>
  );
};

export default Progress;