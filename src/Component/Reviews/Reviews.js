import React from "react";
import Progress from "./Progress";
import { Rating } from "@mui/material";
import Loading from "../../Shared/Loading/Loading";
import { useQuery } from "react-query";

const Reviews = ({ toolId, reviewDone }) => {
  // const [reviews, setReviews] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useLayoutEffect(() => {
  //   setIsLoading(true);
  //   fetch(`https://handyman-server-production.up.railway.app/reviews/${toolId}?currentPage=0&limit=100`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //   console.log('todo id',toolId);
  //       setReviews(data)
  //       setIsLoading(false)
  //     })
  // }, [toolId]);

  // if (isLoading) {
  //   return (
  //     <Loading/>
  //   );
  // }
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch(
      `https://handyman-server-production.up.railway.app/reviews/${toolId}?currentPage=0&limit=100`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  if (reviewDone) {
    refetch();
  }
  return (
    <>
      <Progress reviews={reviews} />
      <div className="container py-12 lg:px-16">
        {reviews.map((review) => (
          <div>
            <div
              key={review?._id}
              className="border-r border-l border-gray-300 p-3"
              style={{ fontFamily: "Poppins,sans-serif" }}
            >
              <div className="flex gap-2 px-auto">
                <img
                  src={review?.avatar}
                  className="w-10 h-10 rounded-full border border-blue-600"
                  alt=""
                />
                <div>
                  <h1 className="text-md">{review?.name}</h1>
                  <h1>
                    {review?.email.replace(
                      /(\w{3})[\w.-]+@([\w.]+\w)/,
                      "$1***@$2"
                    )}
                  </h1>
                </div>
              </div>
              <div>
                <Rating
                  name="simple-controlled"
                  value={review?.rates}
                  readOnly={true}
                />
              </div>
              <h1 className="text-gray-400 text-md border border-gray-300 p-2 m-2">
                {" "}
                {review?.message}
              </h1>

              <div className=" h-40 w-40">
                {review?.image === "" ? null : (
                  <img src={review?.image} className="object-contain" alt="" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
