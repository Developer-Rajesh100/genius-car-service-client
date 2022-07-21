import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../FirebaseInit";
import Spinner from "../Spinner";

const Navebar = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    const logout = () => {
        signOut(auth);
    };
    if (loading) {
        <Spinner />;
    }
    const navigate = useNavigate();
    // if (user) {
    //     navigate("/");
    // }
    const Item = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <a href="/#about">About Us</a>
            </li>
            <li>
                <a href="/#service">Services</a>
            </li>
            <li>
                <a href="/#review">Testimonials</a>
            </li>
            <li>
                <a>Contact us</a>
            </li>
            {/* <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/admin">Admin Panel</Link>
            </li> */}
            {/* {user && (
                <>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin Panel</Link>
                    </li>
                </>
            )} */}
            {user?.email === "example@example.com" && (
                <>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin Panel</Link>
                    </li>
                </>
            )}

            {user ? (
                <li>
                    <button onClick={logout}>Logout</button>
                </li>
            ) : (
                <li>
                    <Link to="/login">Login</Link>
                </li>
            )}
        </>
    );
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {Item}{" "}
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case text-xl">
                    Genius Car
                </Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">{Item}</ul>
            </div>
        </div>
    );
};

export default Navebar;
