import React from "react";
import { useForm } from "react-hook-form";

const Banner = ({ image }) => {
    const { img1, img2, img3, _id } = image;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);

        // Banner PUT API
        const url = `http://localhost:5000/banner/${_id}`;
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
                Banner Image
            </h1>
            <div className="flex justify-center">
                <form
                    className="flex flex-col w-1/2"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        type="text"
                        defaultValue={img1}
                        placeholder="First Slide URL"
                        {...register("img1")}
                        className="mb-3 px-3 py-1 rounded-md"
                    />
                    <input
                        type="text"
                        defaultValue={img2}
                        placeholder="Second Slide URL"
                        {...register("img2")}
                        className="mb-3 px-3 py-1 rounded-md"
                    />
                    <input
                        type="text"
                        defaultValue={img3}
                        placeholder="Third Slide URL"
                        {...register("img3")}
                        className="mb-3 px-3 py-1 rounded-md"
                    />

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

export default Banner;
