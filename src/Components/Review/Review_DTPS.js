import React, { useEffect, useState } from "react";
import Review from "./Review";

const Review_DTPS = () => {
    const [reviews, setRivews] = useState([]);
    useEffect(() => {
        fetch("https://powerful-sands-08936.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setRivews(data));
    }, []);
    return (
        <div id="review" className=" bg-base-200">
            <h1 className="text-5xl font-semibold text-center pt-20 mt-24">
                Review
            </h1>
            <div className="mx-20 pt-24 pb-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {reviews.map((review) => (
                    <Review key={review._id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default Review_DTPS;
