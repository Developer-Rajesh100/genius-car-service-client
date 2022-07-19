import React from "react";

const Navebar = () => {
    const Item = (
        <>
            <li>
                <a>Home</a>
            </li>

            <li>
                <a>About Us</a>
            </li>
            <li>
                <a>Services</a>
            </li>
            <li>
                <a>Testimonials</a>
            </li>
            <li>
                <a>Contact us</a>
            </li>
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
                <a class="btn btn-ghost normal-case text-xl">Genius Car</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">{Item}</ul>
            </div>
        </div>
    );
};

export default Navebar;
