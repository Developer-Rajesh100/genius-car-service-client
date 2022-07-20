import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../FirebaseInit";

const Testimonials = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="bg-base-200  pb-20">
            <h1 className="text-5xl font-semibold text-center mb-10 pt-10">
                Reviews
            </h1>
            <div className="flex justify-center">
                <form
                    className="flex flex-col w-1/2"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        type="text"
                        value={user?.displayName}
                        placeholder="Name"
                        {...register("name")}
                        className="mb-3 px-3 py-1 rounded-md"
                        disabled
                    />

                    <input
                        type="email"
                        value={user?.email}
                        placeholder="Email"
                        {...register("email", { required: true })}
                        className="mb-3 px-3 py-1 rounded-md"
                        disabled
                    />
                    <textarea
                        name="review"
                        {...register("review", { required: true })}
                        id=""
                        cols="30"
                        rows="7"
                        className="mb-3 px-3 py-3 rounded-md"
                        placeholder="Write Your Review...."
                    ></textarea>

                    {errors.exampleRequired && (
                        <span>This field is required</span>
                    )}

                    <input
                        className="btn btn-primary btn-sm"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default Testimonials;
