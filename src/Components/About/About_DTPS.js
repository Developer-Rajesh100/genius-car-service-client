import React from "react";
import About from "./About";
import about_img from "../../Images/about/1.jpg";

const About_DTPS = () => {
    const title = "Box Office News!";
    const content =
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.";
    return (
        <div className=" bg-base-200 mt-20 pt-16">
            <About service={about_img} title={title} content={content} />
        </div>
    );
};

export default About_DTPS;
