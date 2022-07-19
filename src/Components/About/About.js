import React from "react";

const About = (props) => {
    const { service, title, content } = props;
    return (
        <section className=" pb-10">
            <h1 className=" text-5xl text-center font-semibold">About Us</h1>
            <div class="hero mt-20">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={service} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-3xl font-semibold">{title}</h1>
                        <p class="py-6">{content}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
