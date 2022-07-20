import React, { useEffect, useState } from "react";
import About from "./About";

const About_DTPS = () => {
    const [about, setabout] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/about")
            .then((res) => res.json())
            .then((data) => setabout(data));
    }, []);
    return (
        <div className=" bg-base-200 mt-20 pt-16">
            {about.map((content) => (
                <About key={content._id} about={content} />
            ))}
        </div>
    );
};

export default About_DTPS;
