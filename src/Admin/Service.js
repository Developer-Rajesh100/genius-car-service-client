import React from "react";
import { useForm } from "react-hook-form";

const Service = ({ service }) => {
    const { image, title, content, _id } = service;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);

        // Service PUT API
        const url = `http://localhost:5000/service/${_id}`;
        console.log(url);
        fetch(url, {
            method: "PUT", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            });
    };
    return (
        <div className="bg-base-200  pb-20">
            <h1 className="text-5xl font-semibold text-center mb-10 pt-10">
                Services
            </h1>
            <div className="flex justify-center">
                <form
                    className="flex flex-col w-1/2"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        type="text"
                        defaultValue={image}
                        placeholder="Image URl"
                        {...register("image")}
                        className="mb-3 px-3 py-1 rounded-md"
                    />

                    <input
                        type="text"
                        defaultValue={title}
                        placeholder="Title"
                        {...register("title", { required: true })}
                        className="mb-3 px-3 py-1 rounded-md"
                    />
                    <textarea
                        name="content"
                        defaultValue={content}
                        {...register("content", { required: true })}
                        id=""
                        cols="30"
                        rows="7"
                        className="mb-3 px-3 py-3 rounded-md"
                        placeholder="Write Your content...."
                    ></textarea>

                    {errors.exampleRequired && (
                        <span>This field is required</span>
                    )}

                    <input
                        className="btn btn-primary btn-sm"
                        type="submit"
                        value="Update"
                    />
                </form>
            </div>
        </div>
    );
};

export default Service;
