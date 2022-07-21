import React from "react";

const NotFound = () => {
    return (
        <>
            <div className="h-screen flex justify-center mt-36">
                <h1 className="text-center">
                    <span className="text-6xl font-semibold">404</span> <br />
                    <span className="text-6xl font-medium text-purple-600">
                        Page Not Found!
                    </span>{" "}
                </h1>
            </div>
        </>
    );
};

export default NotFound;
