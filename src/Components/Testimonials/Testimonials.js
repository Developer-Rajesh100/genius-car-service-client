import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../FirebaseInit";

const Testimonials = () => {
    const [user] = useAuthState(auth);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);

        fetch("https://powerful-sands-08936.herokuapp.com/review", {
            method: "POST",
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
            <div className="flex justify-center">
                <form
                    className="flex flex-col w-1/2"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        type="text"
                        value={user?.displayName}
                        placeholder="Name"
                        {...register("displayName", { required: true })}
                        className="mb-3 px-3 py-1 rounded-md"
                        // disabled
                    />

                    <input
                        type="email"
                        value={user?.email}
                        placeholder="Email"
                        {...register("email", { required: true })}
                        className="mb-3 px-3 py-1 rounded-md"
                        // disabled
                    />
                    <textarea
                        name="content"
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
                        value="Submit"
                        disabled={!user}
                    />
                </form>
            </div>
        </div>
    );
};

export default Testimonials;
