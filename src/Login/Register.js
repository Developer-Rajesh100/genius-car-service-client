import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import google_img from "../Images/Social/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../FirebaseInit";

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    // Google Login
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
