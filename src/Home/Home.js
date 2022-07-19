import React from "react";
import About_DTPS from "../Components/About/About_DTPS";
import Banner_DTPS from "../Components/Banner/Banner_DTPS";
import Service_DTPS from "../Components/Service/Service_DTPS";
import Testimonials_DTPS from "../Components/Testimonials/Testimonials_DTPS";

const Home = () => {
    return (
        <div>
            <Banner_DTPS />
            <About_DTPS />
            <Service_DTPS />
            <Testimonials_DTPS />
        </div>
    );
};

export default Home;
