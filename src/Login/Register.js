import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="h-screen">
            <div className="flex justify-center mt-16">
                <div>
                    <h1 className="text-5xl text-center font-semibold mb-10">
                        Register
                    </h1>
                    <form
                        className="flex flex-col"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {/* First Name  */}
                        <input
                            type="text"
                            placeholder="First Name"
                            {...register("first_name", { required: true })}
                            className="input input-bordered w-full max-w-xs mb-3"
                        />
                        {/* Last Name  */}
                        <input
                            type="text"
                            placeholder="Last Name"
                            {...register("last_name", { required: true })}
                            className="input input-bordered w-full max-w-xs mb-3"
                        />
                        {/* Email  */}
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: true })}
                            className="input input-bordered w-full max-w-xs mb-3"
                        />
                        {/* Phone Number  */}
                        <input
                            type="number"
                            placeholder="Phone Number"
                            {...register("phone_number", { required: true })}
                            className="input input-bordered w-full max-w-xs mb-3"
                        />
                        {/* Address  */}
                        <input
                            type="text"
                            placeholder="Address"
                            {...register("address", { required: true })}
                            className="input input-bordered w-full max-w-xs mb-3"
                        />
                        {/* Password  */}
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: true })}
                            className="input input-bordered w-full max-w-xs mb-3"
                        />
                        {/* Conform Password  */}
                        <input
                            type="password"
                            placeholder="Conform Password"
                            {...register("conform_password", {
                                required: true,
                            })}
                            className="input input-bordered w-full max-w-xs mb-3"
                        />

                        {errors.exampleRequired && (
                            <span>This field is required</span>
                        )}

                        <input
                            className="btn btn-primary btn-sm"
                            type="submit"
                            value="Register"
                        />
                        <p className="mt-3">
                            Already have an Account?{" "}
                            <Link className=" text-green-600" to="/login">
                                Login
                            </Link>{" "}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
