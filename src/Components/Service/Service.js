import React from "react";

const Service = (props) => {
    const { service, title, content } = props;
    return (
        <section className=" mt-24">
            <h1 className=" text-5xl font-semibold text-center mb-20">
                Services
            </h1>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={service} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-3xl font-bold">{title}</h1>
                        <p class="py-6">{content}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
