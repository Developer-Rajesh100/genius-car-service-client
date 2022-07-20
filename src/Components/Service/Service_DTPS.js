import React, { useEffect, useState } from "react";
import Service from "./Service";
import Service_img from "../../Images/services/6.jpg";

const Service_DTPS = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div id="service">
            {services.map((service) => (
                <Service key={service._id} service={service} />
            ))}
        </div>
    );
};

export default Service_DTPS;
