import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import google_img from "../Images/Social/google.png";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../FirebaseInit";
import Spinner from "../Shared/Spinner";

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // Google Signin
    const [signInWithGoogle, user1, loading1, error1] =
        useSignInWithGoogle(auth);
    // Sign In With Email & Password
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
        console.log(data);
    };
    const navigate = useNavigate();
    if (user || user1) {
        navigate("/");
    }
    // Error
    let signinError;
    if (error1 || error) {
        signinError = (
            <p className="text-red-500 text-center mt-2">
                <small> Error: {error?.message || error1?.message}</small>
            </p>
        );
    }
    // Spinner
    if (loading) {
        <Spinner />;
    }
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
                            className="flex justify-center items-center bg-indigo-200 hover:bg-indigo-300 py-1 rounded-lg px-3"
                        >
                            <img className="mr-2" src={google_img} alt="" />
                            <p className=" font-semibold text-lg">
                                Continue With Google
                            </p>
                        </button>
                        {/* <p></p> */}
                        {signinError}
                        <p className="mt-2">
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
