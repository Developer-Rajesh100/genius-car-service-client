import React from "react";
import Service from "./Service";
import Service_img from "../../Images/services/6.jpg";

const Service_DTPS = () => {
    const title = "Box Office News!";
    const content =
        " Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.";
    return (
        <div>
            <Service service={Service_img} title={title} content={content} />
        </div>
    );
};

export default Service_DTPS;
