import React, { useEffect, useState } from "react";
import About from "./About";
import Banner from "./Banner";
import Service from "./Service";

const Admin_DTPS = () => {
    // Banner Data
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch("https://powerful-sands-08936.herokuapp.com/banner")
            .then((res) => res.json())
            .then((data) => setImages(data));
    }, []);

    // About Data
    const [about, setabout] = useState([]);
    useEffect(() => {
        fetch("https://powerful-sands-08936.herokuapp.com/about")
            .then((res) => res.json())
            .then((data) => setabout(data));
    }, []);

    // Services Data
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://powerful-sands-08936.herokuapp.com/service")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <>
            {/* Banner */}
            {images.map((image) => (
                <Banner key={image._id} image={image} />
            ))}

            <hr className="h-10" />

            {/* About  */}
            {about.map((abt) => (
                <About key={abt._id} about={abt} />
            ))}

            <hr className="h-10" />

            {/* Service  */}
            {services.map((service) => (
                <Service key={service._id} service={service} />
            ))}
        </>
    );
};

export default Admin_DTPS;
