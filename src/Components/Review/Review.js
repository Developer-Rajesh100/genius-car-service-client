import React from "react";

const Review = ({ review }) => {
    const { displayName, email, content } = review;
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{displayName}</h2>
                <h4 className="font-medium">
                    <small>{email}</small>
                </h4>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Review;
