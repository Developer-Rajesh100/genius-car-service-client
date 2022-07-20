import React, { useEffect, useState } from "react";
import Service from "./Service";
import Service_img from "../../Images/services/6.jpg";

const Service_DTPS = () => {
    // const title = "Box Office News!";
    // const content =
    //     " Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.";
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div>
            {services.map((service) => (
                <Service key={service._id} service={service} />
            ))}
        </div>
    );
};

export default Service_DTPS;
