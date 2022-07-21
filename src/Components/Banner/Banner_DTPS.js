import React, { useEffect, useState } from "react";
import Banner from "./Banner";

const Banner_DTPS = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch("https://powerful-sands-08936.herokuapp.com/banner")
            .then((res) => res.json())
            .then((data) => setImages(data));
    }, []);
    return (
        <div>
            {images.map((image) => (
                <Banner key={image._id} image={image} />
            ))}
        </div>
    );
};

export default Banner_DTPS;
