import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="h-screen">
            <div className="flex justify-center mt-36">
                <div>
                    <h1 className="text-5xl text-center font-semibold mb-10">
                        Login
                    </h1>
                    <form
                        className="flex flex-col"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: true })}
                            // className="mb-3 px-3 py-1 rounded-md"
                            className="input input-bordered w-full max-w-xs mb-3"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: true })}
                            // className="mb-3 px-3 py-1 rounded-md"
                            className="input input-bordered w-full max-w-xs mb-3"
                        />
                        {errors.exampleRequired && (
                            <span>This field is required</span>
                        )}

                        <input
                            className="btn btn-primary btn-sm"
                            type="submit"
                            value="Login"
                        />
                        <p className="mt-3">
                            New to Genius Car?{" "}
                            <Link className=" text-green-600" to="/register">
                                Create Account
                            </Link>{" "}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
