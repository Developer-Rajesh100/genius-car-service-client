import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import google_img from "../Images/Social/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../FirebaseInit";

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    // Google Signin
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
                        <div class="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="flex justify-center items-center bg-indigo-200 hover:bg-indigo-300 py-1 rounded-lg"
                        >
                            <img className="mr-2" src={google_img} alt="" />
                            <p className=" font-semibold text-lg">
                                Continue With Google
                            </p>
                        </button>
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
